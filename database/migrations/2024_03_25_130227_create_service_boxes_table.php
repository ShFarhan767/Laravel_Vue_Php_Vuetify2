<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateServiceBoxesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('service_boxes', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('Title',);
            $table->string('Icon',255);
            $table->string('description',);
            
            $table->integer('status')->default(0);
            $table->integer('shopId');
            $table->integer('createBy');
            $table->integer('updateBy')->nullable();
            $table->integer('deleteBy')->nullable();
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
        Schema::dropIfExists('service_boxes');
    }
}
