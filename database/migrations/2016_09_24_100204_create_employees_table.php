<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateEmployeesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('employees', function (Blueprint $table) {
            $table->increments('id');
            $table->string('employee_id');
            $table->string('name');
            $table->string('designation');
            $table->integer('department_id');
            $table->integer('is_active')->default(1)->comment("0-No, 1-yes");
            $table->integer('created_by')->comment("Employee id");
            $table->integer('updated_by')->default('null')->comment("Employee id");
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
        //
    }
}
