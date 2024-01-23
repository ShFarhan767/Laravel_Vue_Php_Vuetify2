<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateHtlBookingInformationTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('htl_booking_information', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('invoiceNo');
            $table->dateTime('salesDate');
            $table->integer('customerTypeId');
            $table->integer('salesCustomerId');
            $table->double('currentTotalAmount');
            $table->double('currentPaidAmount');
            $table->double('currentDue');
            
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
        Schema::dropIfExists('htl_booking_information');
    }
}
