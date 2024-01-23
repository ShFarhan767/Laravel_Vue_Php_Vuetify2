<?php

namespace App\Models\Hotel;

use Illuminate\Database\Eloquent\Model;
use App\Models\Hotel\HtlFacilityType;

class HtlFacility extends Model
{
    public function facility_type(){
        return $this->belongsTo(HtlFacilityType::class,'facility_type_id','id');
      }

    public function facility_info(){
        return $this->hasMany(HtlFacilityMaster::class,'facility_id','id');
    }
}
