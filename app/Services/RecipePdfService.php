<?php

namespace App\Services;

use Illuminate\Support\Facades\File;
use RuntimeException;
use Symfony\Component\Process\Process;

class RecipePdfService
{
	public function render(array $recipe): string
	{
		$id = uniqid('recipe_', true);

		$inputPath = storage_path("app/temp/{$id}.json");
		$outputPath = storage_path("app/temp/{$id}.pdf");

		File::ensureDirectoryExists(storage_path('app/temp'));

		file_put_contents(
			$inputPath,
			json_encode($recipe, JSON_THROW_ON_ERROR | JSON_UNESCAPED_UNICODE),
		);

		try {
			$nodeBinary = config('services.pdf.node_binary');

			$process = new Process([
				$nodeBinary,
				base_path('node_modules/tsx/dist/cli.mjs'),
				base_path('scripts/render-recipe.tsx'),
				$inputPath,
				$outputPath,
			], base_path());

			$process->setEnv(array_filter([
				'SystemRoot' => getenv('SystemRoot') ?: null,
				'WINDIR' => getenv('WINDIR') ?: null,
				'PATH' => str_contains($nodeBinary, DIRECTORY_SEPARATOR)
					? dirname($nodeBinary).PATH_SEPARATOR.getenv('PATH')
					: getenv('PATH'),
			]));

			$process->setTimeout(120);
			$process->run();

			if (!$process->isSuccessful()) {
				throw new RuntimeException(
					$process->getErrorOutput() ?: 'PDF rendering failed.',
				);
			}

			if (!File::exists($outputPath)) {
				throw new RuntimeException('PDF renderer did not create a file.');
			}

			return File::get($outputPath);
		} finally {
			File::delete($inputPath);
			File::delete($outputPath);
		}
	}
}
