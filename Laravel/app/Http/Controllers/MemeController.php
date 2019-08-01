<?php

namespace App\Http\Controllers;

use App\Meme;
use Illuminate\Http\Request;

class MemeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
		return Meme::all();	
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
		$meme = new Meme;
		$meme->nome = $request->nome;
		$meme->descricao = $request->descricao;
		$meme->nivel = $request->nivel;
		$meme->imagem = $request->imagem;
		$meme->save();
		return response()->json([$meme]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Meme  $meme
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
		$resultado = Meme::findOrFail($id);
		return response()->json([$resultado]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Meme  $meme
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $meme = Meme::findOrFail($id); 

		if($request->nome)
			$meme->nome = $request->nome;
		if ($request->descricao)
			$meme->descricao = $request->descricao;
		if ($request->nivel)
			$meme->nivel = $request->nivel;
		if ($request->imagem)
			$meme->imagem = $request->imagem;
		
		$meme->save();
		return response()->json([$meme]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Meme  $meme
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
		Meme::destroy($id);
		return response()->json(['Meme deletado!']);
    }
}
