<?php

namespace App\Models\Hotel\Booking;

use Illuminate\Database\Eloquent\Model;
use App\Models\Hotel\HtlInformation;
use App\Models\Hotel\Room\HtlRomInformation;

class HtlBooking extends Model
{
    //  public function hotel_info(){
    //     return $this->belongsTo(HtlInformation::class);
    // }

     public function room_info(){
        return $this->belongsTo(HtlRomInformation::class);
    }

}
