<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Agenda extends Model
{
    use HasFactory;
    protected $fillable = ['nama', 'tipe', 'deskripsi', 'posisi'];

    public function tugas() {
        return $this->hasMany(Tugas::class);
    }
}
