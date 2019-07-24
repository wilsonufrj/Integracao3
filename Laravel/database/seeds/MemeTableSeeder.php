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
			'descricao' => 'Esse jogo é uma porra',
			'nivel'=> 5,
			'imagem' => 'https://images-na.ssl-images-amazon.com/images/I/512dVKB22QL.png',
		]);

		DB::table('memes')->insert([
			'nome' => 'Gnome',
			'descricao' => 'HELLO ME OLD CHUM',
			'nivel'=> 10,
			'imagem' => 'https://i.kym-cdn.com/entries/icons/original/000/025/526/gnome.jpg',
		]);

		DB::table('memes')->insert([
			'nome' => 'Vem Tranquilo',
			'descricao' => 'Tá muito afobado',
			'nivel'=> 3,
			'imagem' => 'https://s1.dmcdn.net/wNBFu/x1080-Jha.jpg',
		]);

		DB::table('memes')->insert([
			'nome' => 'Pikachu surpreso',
			'descricao' => ':O',
			'nivel'=> 7,
			'imagem' => 'https://i.pinimg.com/280x280_RS/ca/cd/b6/cacdb6ab013e10beb2a9286f4ccd79b4.jpg',
		]);
    }
}
