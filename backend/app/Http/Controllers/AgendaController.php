<?php

namespace App\Http\Controllers;

use App\Models\Agenda;
use App\Http\Requests\UpdateAgendaRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class AgendaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return response()->json(Agenda::all(), 200);
    }
    
    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'nama' => 'required',
            'tipe' => 'required',
            'posisi' => 'required',
        ]);
        if($validator->fails()) {
            return response()->json(['Errors' => $validator->errors()], 422);
        }
        $agenda = Agenda::create($request->all());
        return response()->json($agenda, 200);
    }

    /**
     * Display the specified resource.
     */
    public function show(int $id)
    {
        return response(Agenda::where('id', $id)->first(), 200);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, int $id)
    {
        $agenda = Agenda::where('id', $id)->first();
        $agenda->update($request->all());
        return response()->json(['message' => 'Agenda berhasil diupdate']);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(int $id)
    {
        $agenda = Agenda::where('id', $id)->first();
        $agenda->delete();
        return response()->json(['message' => 'Agenda berhasil dihapus']);
    }
}
