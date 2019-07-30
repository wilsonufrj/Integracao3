<?php

use Illuminate\Database\Seeder;

class MemeTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
		DB::table('memes')->insert([
			'nome' => 'Minecraft',
			'descricao' => 'Esse jogo é muito bom!',
			'nivel'=> 5,
			'imagem' => 'no',
		]);

		DB::table('memes')->insert([
			'nome' => 'Gnome',
			'descricao' => 'HELLO ME OLD CHUM',
			'nivel'=> 10,
			'imagem' => 'no',
		]);

		DB::table('memes')->insert([
			'nome' => 'Vem Tranquilo',
			'descricao' => 'Tá muito afobado',
			'nivel'=> 3,
			'imagem' => 'no',
		]);

		DB::table('memes')->insert([
			'nome' => 'Pikachu surpreso',
			'descricao' => ':O',
			'nivel'=> 7,
			'imagem' => 'no',
		]);
    }
}
