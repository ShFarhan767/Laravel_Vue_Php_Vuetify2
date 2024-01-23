<?php

namespace App\Models\Hotel\Room;

use Illuminate\Database\Eloquent\Model;

class HtlRomType extends Model
{
     public function room_info(){
        return $this->hasMany(HtlRomInformation::class,'room_type_id','id');
    }
}
