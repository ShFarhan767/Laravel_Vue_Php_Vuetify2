<?php

namespace App\Models\Hotel\Room;

use Illuminate\Database\Eloquent\Model;

class HtlRomPricing extends Model
{
    public function price_type(){
        return $this->belongsTo(HtlRomPriceType::class,'day_price_type_id','id');
    }
}
