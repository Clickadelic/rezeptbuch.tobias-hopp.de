<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class MediaResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'url' => $this->url ?? $this->getUrl(), // je nach Implementation
            'type' => $this->type ?? null,
            'meta' => $this->when(isset($this->meta), $this->meta),
        ];
    }
}
