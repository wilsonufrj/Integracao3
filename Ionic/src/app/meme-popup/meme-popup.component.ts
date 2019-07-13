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

  constructor( public navParams: NavParams,
    public memeService: MemeService,
    public modalController: ModalController) {

    this.id = this.navParams.get('id');
    this.nome = this.navParams.get('nome');
    this.descricao = this.navParams.get('descricao');
    this.nivel = this.navParams.get('nivel');
    this.imagem = this.navParams.get('imagem');
    this.isNew = this.navParams.get('isNew');
  }

  ngOnInit() {}

  onSubmit(meme){
    if(this.isNew){
      this.memeService.createMeme(meme).subscribe(
        (res) => {
          console.log('created');
          console.log(res);
        }
      )
    } else {
      this.memeService.updateMeme(meme,this.id).subscribe(
        (res) => {
          console.log('updated');
          console.log(res);
        }
      )
    }
  }

  deleteMeme(meme) {
    this.memeService.deleteMeme(meme,this.id).subscribe(
      (res) => {
        console.log('exterminated');
        console.log(res);
      }
    )
  }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': true
    });
  }
}
