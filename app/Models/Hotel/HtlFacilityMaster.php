<?php

namespace App\Models\Hotel;

use Illuminate\Database\Eloquent\Model;

class HtlFacilityMaster extends Model
{
    public function facility(){
        return $this->belongsTo(HtlFacility::class);
    }
    
}
