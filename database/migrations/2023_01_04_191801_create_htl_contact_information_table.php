<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateHtlContactInformationTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('htl_contact_information', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('hotel_info_id');
            $table->integer('contact_type_id');
            $table->integer('position_type_id');
            $table->string('full_name',255);
            $table->string('email',255);
            $table->string('mobile_no',255)->nullable();
            $table->string('office_phone_no',255)->nullable();
            $table->string('extension',255)->nullable();
            $table->time('contact_hour_from')->nullable();
            $table->time('contact_hour_to')->nullable();
            $table->integer('position');
            $table->integer('status')->comment('0=inactive, 1=active');
            $table->integer('company_id');
            $table->integer('create_by');
            $table->integer('update_by')->nullable();
            $table->integer('delete_by')->nullable();
            $table->timestamps();
            $table->dateTime('deleted_at')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('htl_contact_information');
    }
}
