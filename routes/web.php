<?php

Route::get('/', function () {
    return view('welcome');
});
Route::get('reset/forget-password', 'Auth\AdminForgatePasswordController@showForgetPasswordForm')->name('forget.password.get');

Route::post('reset/forget-password', 'Auth\AdminForgatePasswordController@submitForgetPasswordForm')->name('forget.password.post'); 

Route::get('reset/reset-password/{token}','Auth\AdminForgatePasswordController@showResetPasswordForm')->name('reset.password.get');

Route::post('reset/reset-password', 'Auth\AdminForgatePasswordController@submitResetPasswordForm')->name('reset.password.post');

Route::get('reset/getTotalBranch','ShopInformation\ShopBranchController@getTotalBranch');
Auth::routes();



