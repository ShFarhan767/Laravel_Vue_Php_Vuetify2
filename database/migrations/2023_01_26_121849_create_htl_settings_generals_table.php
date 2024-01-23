<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateHtlSettingsGeneralsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('htl_settings_generals', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('target',255);
            $table->string('header_title',255);
            $table->integer('home_featured_hotel');
            $table->integer('home_featured_hotel_display_order');
            $table->integer('listing_hotels');
            $table->integer('listing_hotels_display_order');
            $table->integer('search_result_hotel');
            $table->integer('search_result_hotel_display_order');
            $table->integer('related_hotels');
            $table->double('search_min_price');
            $table->double('search_max_price');
            $table->time('check_in_time');
            $table->time('check_out_time');
            $table->string('meta_keyword',255);
            $table->string('meta_description',255);

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
        Schema::dropIfExists('htl_settings_generals');
    }
}
