<?php

namespace App\Models\Hotel;

use Illuminate\Database\Eloquent\Model;
use App\Country;
use App\Models\Hotel\HtlPropertyType;
use App\Models\Hotel\HtlLocation;
use App\Models\Hotel\HtlContactInformation;
use App\Models\Hotel\Room\HtlRomInformation;
use App\Models\Hotel\Booking\HtlBooking;

class HtlInformation extends Model
{
    public function country(){
        return $this->belongsTo(Country::class,'country_id','id');
    }
      
    public function location(){
        return $this->belongsTo(HtlLocation::class,'location_id','id');
    }

    public function property_type(){
        return $this->belongsTo(HtlPropertyType::class);
    }

    public function contact(){
        return $this->hasMany(HtlContactInformation::class,'hotel_info_id','id');
    }

   public function htl_room_info(){
        return $this->hasMany(HtlRomInformation::class,'hotel_info_id','id');
    }


}
