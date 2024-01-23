<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateHtlImagesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('htl_images', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('hotel_info_id');
            $table->integer('image_title_id');
            $table->string('image_path',255);
            $table->string('image_name',255);
            $table->string('alt_text',255);
            
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
        Schema::dropIfExists('htl_images');
    }
}
