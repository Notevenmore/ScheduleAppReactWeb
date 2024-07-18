<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tugas extends Model
{
    use HasFactory;
    protected $fillable = ['agenda_id', 'deskripsi', 'deadline'];
    protected $with = ['agenda'];

    public function agenda() {
        return $this->belongsTo(Agenda::class);
    }
}
