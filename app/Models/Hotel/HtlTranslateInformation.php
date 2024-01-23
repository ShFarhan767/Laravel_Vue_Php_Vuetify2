<?php

namespace App\Models\Hotel;

use Illuminate\Database\Eloquent\Model;
use App\Models\Hotel\HtlLanguageInformation;

class HtlTranslateInformation extends Model
{
    public function language(){
        return $this->belongsTo(HtlLanguageInformation::class,'language_id','id');
      }
}
