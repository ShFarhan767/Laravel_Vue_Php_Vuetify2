<?php

namespace App\Models\Hotel\Room;

use Illuminate\Database\Eloquent\Model;

class HtlRoomFacilityMaster extends Model
{
     public function htl_facility_room(){
        return $this->belongsTo(HtlRomFacility::class);
    }
}
