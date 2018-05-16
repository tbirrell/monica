<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateWardrobeTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('wardrobe', function (Blueprint $table) {
            $table->increments('id');
            $table->string('tshirt');
            $table->string('pants');
            $table->string('shorts');
            $table->string('overshirt');
            $table->string('jacket');
            $table->string('hoodie');
            $table->string('btnup');
            $table->string('tie');
            $table->string('other');
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
        Schema::dropIfExists('wardrobe');
    }
}
