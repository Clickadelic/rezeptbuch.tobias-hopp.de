<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

class Media extends Model
{
    protected $fillable = [
        'name',
        'file_name',
        'mime_type',
        'path',
        'disk',
        'file_hash',
        'collection',
        'size',
    ];

    protected $appends = ['url'];

    public function getUrlAttribute(): string
    {
        $disk = $this->disk ?: config('filesystems.default');
        $path = ltrim((string) $this->path, '/');

        // If we saved into public/uploads/..., serve directly via asset()
        if (str_starts_with($path, 'uploads/')) {
            return asset($path);
        }

        // 1) If a disk URL is configured, build from it (works for s3 and custom cdn urls)
        $diskConfig = config("filesystems.disks.$disk", []);
        if (!empty($diskConfig['url'])) {
            return rtrim($diskConfig['url'], '/') . '/' . $path;
        }

        // 2) For the typical public disk, use the storage symlink
        if ($disk === 'public') {
            return asset('storage/' . $path);
        }

        // 3) Try the Storage::url() method (may not exist on some adapters / static analyzers)
        try {
            return Storage::disk($disk)->url($path);
        } catch (\Throwable $e) {
            // 4) Last resort: assume public storage
            return '/storage/' . $path;
        }
    }

    public function recipes()
    {
        return $this->belongsToMany(Recipe::class, 'recipe_media', 'media_id', 'recipe_id')
            ->withPivot('collection', 'is_primary', 'position')
            ->withTimestamps();
    }
}
