<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateHtlRomPricingsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('htl_rom_pricings', function (Blueprint $table) {
            $table->bigIncrements('id');
        $table->integer('hotel_info_id');
        $table->integer('room_id')->nullable();
        $table->integer('room_type_id');
        $table->integer('bed_type_id');
        $table->integer('day_price_type_id');
        $table->string('fixed_date_from',55)->nullable();
        $table->string('fixed_date_to',55)->nullable();
        $table->double('agent_price');
        $table->double('vendor_price');
        $table->double('customer_price');
        $table->double('showing_price');
        $table->integer('currency_id')->default('1');
        
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
        Schema::dropIfExists('htl_rom_pricings');
    }
}
