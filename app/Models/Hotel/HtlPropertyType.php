<?php

namespace App\Models\Hotel;

use Illuminate\Database\Eloquent\Model;
use App\Models\Hotel\HtlInformation;

class HtlPropertyType extends Model
{
    public function hotel_info(){
        return $this->hasMany(HtlInformation::class,'property_type_id','id');
    }
}
