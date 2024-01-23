<?php

namespace App\Models\Hotel;

use Illuminate\Database\Eloquent\Model;
use App\Models\Hotel\HtlPaymentType;

class HtlPolicyInformation extends Model
{
     public function payment_method_info(){
        return $this->belongsTo(HtlPaymentType::class);
    }
}
