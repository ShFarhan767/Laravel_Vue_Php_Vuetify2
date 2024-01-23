<?php

namespace App\Models\Hotel;

use Illuminate\Database\Eloquent\Model;
use App\Models\Hotel\HtlPolicyInformation;
use App\Models\Hotel\HtlBankInfo;

class HtlPaymentType extends Model
{
    public function htl_payment_info(){
        return $this->hasMany(HtlPolicyInformation::class,'payment_method_id','id');
    }

}
