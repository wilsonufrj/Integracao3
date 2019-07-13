import { Component, OnInit, Input } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { MemeService } from '../meme.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-meme-popup',
  templateUrl: './meme-popup.component.html',
  styleUrls: ['./meme-popup.component.scss'],
})
export class MemePopupComponent implements OnInit {

  id: number;
	nome: string;
	descricao: string;
	nivel: number;
  imagem: string;
  isNew: boolean;

  form = {
		id: '',
		nome: '',
		descricao: '',
		nivel: '',
		imagem: ''
	} ;
  constructor( public navParams: NavParams,
    public memeService: MemeService,
    public modalController: ModalController) {

    this.form.id = this.navParams.get('id');
    this.form.nome = this.navParams.get('nome');
    this.form.descricao = this.navParams.get('descricao');
    this.form.nivel = this.navParams.get('nivel');
    this.form.imagem = this.navParams.get('imagem');
    this.isNew = this.navParams.get('isNew');
  }

  ngOnInit() {}

  onSubmit(meme){
	console.log(meme)
	console.log(this.form)
    if(this.isNew){
      this.memeService.createMeme(this.form).subscribe(
        (res) => {
          console.log('created');
          console.log(res);
        }
      )
    } else {
      this.memeService.updateMeme(this.form,this.form.id).subscribe(
        (res) => {
          console.log('updated');
          console.log(res);
        }
      )
    }
		this.dismiss(true);
	
  }

  deleteMeme(meme) {
    this.memeService.deleteMeme(meme,this.id).subscribe(
      (res) => {
        console.log('exterminated');
        console.log(res);
      }
    )
  }

  dismiss(value:boolean) {
		var changed = false;
		changed = value;
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': true,
			'changed': changed
    });
  }
}
