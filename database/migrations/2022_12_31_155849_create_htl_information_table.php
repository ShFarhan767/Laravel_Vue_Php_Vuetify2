<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateHtlInformationTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('htl_information', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('country_id');
            $table->integer('hotel_code_serial_no');
            $table->string('hotel_code',255)->comment('Formate = H country2char 001 = H BA 001');
            $table->string('hotel_name',255);
            $table->integer('property_type_id');
            $table->string('location_map_url',255)->nullable();
            $table->string('street_address',255);
            $table->string('post_code',255);
            $table->integer('star')->nullable();
            $table->integer('commission_type')->nullable();
            $table->double('commission_amount')->nullable();
            $table->integer('vat_type')->nullable();
            $table->integer('vat_amount')->nullable();
            $table->string('related_hotel',255)->nullable();
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
        Schema::dropIfExists('htl_information');
    }
}
