<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateHtlBankInformationTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('htl_bank_information', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('payment_type_id');
            $table->string('bank_name',255);
            $table->string('account_name',255);
            $table->string('account_number',255);
            $table->string('routing_number',255)->nullable();
            $table->string('swift_code',255)->nullable();
            
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
        Schema::dropIfExists('htl_bank_information');
    }
}
