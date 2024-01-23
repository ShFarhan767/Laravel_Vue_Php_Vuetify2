<?php

namespace App\Models\Hotel\Room;

use Illuminate\Database\Eloquent\Model;
use App\Models\Hotel\HtlImageTitle;

class HtlRomImage extends Model
{
    public function image_title(){
        return $this->belongsTo(HtlImageTitle::class,'image_title_id','id');
      }
}
