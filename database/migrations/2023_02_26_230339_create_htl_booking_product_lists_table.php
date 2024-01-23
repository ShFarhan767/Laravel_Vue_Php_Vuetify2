<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateHtlBookingProductListsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('htl_booking_product_lists', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('invoiceNo')->nullable();
            $table->integer('hotelId');
            $table->dateTime('checkIn');
            $table->dateTime('checkOut');
            $table->integer('room_type_id');
            $table->integer('bed_type_id');
            $table->integer('adult');
            $table->integer('child')->nullable();
            $table->integer('noOfRoom');
            $table->integer('extraBed')->nullable();
            $table->integer('extraBedPrice')->nullable();
            $table->integer('night');
            $table->integer('price');
            $table->integer('totalPrice');
            $table->integer('status')->default('0');
            $table->integer('company_id');
            $table->integer('create_by');
            $table->integer('update_by')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('htl_booking_product_lists');
    }
}
