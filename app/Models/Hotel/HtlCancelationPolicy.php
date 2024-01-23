<?php

namespace App\Models\Hotel;

use Illuminate\Database\Eloquent\Model;
use App\Models\Hotel\Room\HtlRomInformation;

class HtlCancelationPolicy extends Model
{
    public function cancellation_policy_info(){
        return $this->hasMany(HtlRomInformation::class,'cancellation_policy_id','id');
      }
 
}
