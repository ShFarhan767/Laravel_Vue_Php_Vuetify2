<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateHtlRomInformationTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('htl_rom_information', function (Blueprint $table) {
        $table->bigIncrements('id');
        $table->integer('hotel_info_id');
        $table->integer('room_type_id');
        $table->longText('room_title');
        $table->integer('bed_type_id');
        $table->longText('room_description')->nullable();
        $table->longText('cancellation_policy')->nullable();
        $table->integer('quantity')->nullable();
        $table->integer('minimum_stay')->nullable();
        $table->integer('free_breakfast_status')->nullable();
        $table->integer('max_adult')->nullable();
        $table->integer('re_schedule_status')->nullable();
        $table->integer('max_child')->nullable();
        $table->integer('child_age')->nullable();
        $table->integer('no_of_extra_bed')->nullable();
        $table->integer('extra_bed_payment_status')->nullable();
        $table->integer('extra_bed_charge')->nullable();
        $table->integer('extra_bed_charge_status')->nullable();
       
        $table->integer('status')->default(0);
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
        Schema::dropIfExists('htl_rom_information');
    }
}
