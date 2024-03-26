<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMenuItemsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('menu_items', function (Blueprint $table) {
        $table->bigIncrements('id');
        $table->string('menuName',);
        $table->string('menuLink',30);
        
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
        Schema::dropIfExists('menu_items');
    }
}
