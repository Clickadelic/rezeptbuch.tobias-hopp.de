<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class UserPublicResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'id'     => $this->id,
            'name'   => $this->name,
            'avatar' => $this->when(isset($this->profile_picture_url), $this->profile_picture_url),
            'bio' => $this->when(isset($this->bio), $this->bio),
            'rank' => $this->rank,
            'website_url' => $this->when(isset($this->website_url), $this->website_url)
        ];
    }
}
