<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateHtlLanguageInformationTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('htl_language_information', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('language_name',255)->nullable();
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
        Schema::dropIfExists('htl_language_information');
    }
}
