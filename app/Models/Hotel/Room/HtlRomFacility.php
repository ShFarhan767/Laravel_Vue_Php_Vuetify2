<?php

namespace App\Models\Hotel\Room;

use Illuminate\Database\Eloquent\Model;
use App\Models\Hotel\Room\HtlRomFacilityType;

class HtlRomFacility extends Model
{
    public function facility_type(){
       return $this->belongsTo(HtlRomFacilityType::class,'room_facility_type_id','id');
    }

    public function htl_room_facility(){
    	return $this->hasMany(HtlRoomFacilityMaster::class,'room_facility_id','id');
    }
    
}
