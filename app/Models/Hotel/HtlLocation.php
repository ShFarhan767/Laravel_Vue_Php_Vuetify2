<?php

namespace App\Models\Hotel;

use Illuminate\Database\Eloquent\Model;
use App\Country;

class HtlLocation extends Model
{
    public function country(){
        return $this->belongsTo(Country::class,'countryId','id');
      }
}
