<?php

namespace App\Models\Hotel;

use Illuminate\Database\Eloquent\Model;
use App\Models\Hotel\HtlPaymentType;

class HtlBankInfo extends Model
{
    public function bank_payment_info(){
    	return $this->belongsTo(HtlPaymentType::class,'id','bank_payment_type_id');
    }
  
}
