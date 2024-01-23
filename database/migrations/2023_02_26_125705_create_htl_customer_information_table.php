<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateHtlCustomerInformationTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('htl_customer_information', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('customerTypeId');
            $table->string('accountCode','50')->nullable();
            $table->string('customerName');
            $table->string('customerEmail')->nullable();
            $table->string('customerPhone');
            $table->string('customerImoNumber')->nullable();
            $table->string('customerFacebookID')->nullable();
            $table->text('customerAddress')->nullable();
            $table->string('referenceName')->nullable();
            $table->string('referenceEmail')->nullable();
            $table->string('referencePhone')->nullable();
            $table->string('customerStatus')->default(1);
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
        Schema::dropIfExists('htl_customer_information');
    }
}
