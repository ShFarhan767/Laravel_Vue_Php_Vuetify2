<?php

namespace App\Models\Hotel\Booking;

use Illuminate\Database\Eloquent\Model;
use App\Models\Hotel\HtlCustomerInformation;

class HtlBookingInformation extends Model
{
    public function customer(){
        return $this->belongsTo(HtlCustomerInformation::class,'salesCustomerId','id');
    }
}
