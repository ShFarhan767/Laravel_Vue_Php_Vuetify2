<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateHtlPaymentTypesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('htl_payment_types', function (Blueprint $table) {
        $table->bigIncrements('id');
        $table->string('payment_type_name',255);
        
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
        Schema::dropIfExists('htl_payment_types');
    }
}
