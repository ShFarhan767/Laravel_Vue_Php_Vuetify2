<?php

namespace App\Models\Hotel\Room;

use Illuminate\Database\Eloquent\Model;

class HtlRomBedType extends Model
{
     public function bed_info(){
        return $this->hasMany(HtlRomInformation::class,'bed_type_id','id');
    }
}
