<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');
Route::get('/ambil-tugas', [App\Http\Controllers\TugasController::class, 'index']);
Route::post('/kirim-tugas', [App\Http\Controllers\TugasController::class, 'store']);
Route::post('/ubah-tugas/{id}', [App\Http\Controllers\TugasController::class, 'update']);
Route::get('/tugas/{id}', [App\Http\Controllers\TugasController::class, 'show']);
Route::post('/tugas/destroy/{id}', [App\Http\Controllers\TugasController::class, 'destroy']);
Route::get('/ambil-agenda', [App\Http\Controllers\AgendaController::class, 'index']);
Route::post('/kirim-agenda', [App\Http\Controllers\AgendaController::class, 'store']);
Route::post('/ubah-agenda/{id}', [App\Http\Controllers\AgendaController::class, 'update']);
Route::get('/agenda/{id}', [App\Http\Controllers\AgendaController::class, 'show']);
Route::post('/agenda/destroy/{id}', [App\Http\Controllers\AgendaController::class, 'destroy']);