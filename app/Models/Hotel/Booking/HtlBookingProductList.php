<?php

namespace App\Models\Hotel\Booking;

use Illuminate\Database\Eloquent\Model;
use App\Models\Hotel\HtlInformation;
use App\Models\Hotel\Room\HtlRomType;
use App\Models\Hotel\Room\HtlRomBedType;

class HtlBookingProductList extends Model
{
    public function hotel(){
        return $this->belongsTo(HtlInformation::class,'hotelId','id');
    }
    public function room_type(){
        return $this->belongsTo(HtlRomType::class,'room_type_id','id');
    }
    public function bed_type(){
        return $this->belongsTo(HtlRomBedType::class,'bed_type_id','id');
    }
}
