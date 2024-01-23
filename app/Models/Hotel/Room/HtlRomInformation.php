<?php

namespace App\Models\Hotel\Room;

use Illuminate\Database\Eloquent\Model;
use App\Models\Hotel\Room\HtlRomType;
use App\Models\Hotel\Room\HtlRomBedType;
use App\Models\Hotel\HtlInformation;
use App\Models\Hotel\HtlCancelationPolicy;
use App\Models\Hotel\Booking\HtlBooking;


class HtlRomInformation extends Model
{
    public function hotel_info(){
        return $this->belongsTo(HtlInformation::class,'hotel_info_id','id');
      }

      public function room_type(){
        return $this->belongsTo(HtlRomType::class);
      }

      public function bed_type(){
        return $this->belongsTo(HtlRomBedType::class);
      }
      public function cancellation_policy(){
        return $this->belongsTo(HtlCancelationPolicy::class);
      }

      public function htl_room_book_info_system(){
        return $this->hasMany(HtlBooking::class,'room_id','id');
      }
 
}
