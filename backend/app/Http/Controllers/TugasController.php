<?php

namespace App\Http\Controllers;

use App\Models\Tugas;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;

class TugasController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $tugas = Tugas::leftJoin('agendas', 'tugas.agenda_id', '=', 'agendas.id')->select('tugas.*', 'agendas.nama')->get();
        return response()->json($tugas, 200);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'agenda_id' => 'required',
            'deskripsi' => 'required',
            'tanggal' => 'required',
            'clock' => 'required',
        ]);
        if($validator->fails()) {
            return response()->json(['Errors' => $validator->errors()], 422);
        }
        $request->request->add([
            'deadline' => $request->tanggal.' '.$request->clock.':00'
        ]);
        $tugas = Tugas::create($request->all());
        return response()->json($tugas, 200);
    }

    /**
     * Display the specified resource.
     */
    public function show(int $id)
    {
        $tugas = Tugas::leftJoin('agendas', 'tugas.agenda_id', '=', 'agendas.id')->where('tugas.id', $id)->select('tugas.*', 'agendas.nama')->first();
        return response()->json($tugas, 200);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, int $id)
    {
        $tugas = Tugas::where('tugas.id', $id)->first();
        $request->request->add([
            'deadline' => $request->tanggal.' '.$request->clock.':00'
        ]);
        $tugas->update($request->all());
        return response()->json(["message" => 'data berhasil diupdate'], 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(int $id)
    {
        $tugas = Tugas::where('tugas.id', $id)->first();
        $tugas->delete();
        return response()->json(['message'=>'Berhasil dihapus'], 200);
    }
}
