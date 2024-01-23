<?php

namespace App\Models\Hotel;

use Illuminate\Database\Eloquent\Model;
use App\Models\Hotel\HtlContactType;
use App\Models\Hotel\HtlContactPositionType;

class HtlContactInformation extends Model
{

    public function contact_type(){
        return $this->belongsTo(HtlContactType::class,'contact_type_id','id');
    }

    public function position_type(){
        return $this->belongsTo(HtlContactPositionType::class,'position_type_id','id');
    }
    
}
