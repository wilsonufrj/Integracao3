import { Component } from '@angular/core';
import { MemeService }  from '../meme.service';
import { ModalController } from '@ionic/angular';
import { MemeModalPage } from '../meme-modal/meme-modal.page';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  memes;
  constructor(public memeService: MemeService, public modalController: ModalController) {
    
  }

  async presentModal (meme){
    const modal = await this.modalController.create({
      component: MemeModalPage,
      backdropDismiss: true,
      showBackdrop: true,
      componentProps:{
        'nome': meme.nome,
        'descricao': meme.descricao,
        'nivel': meme.nivel,
        'imagem': meme.imagem
      }
    });
    return await modal.present();
  }

  ngOnInit(){
    this.memeService.getMemes().subscribe(
      (res) => {
        console.log(res);
        this.memes = res;
        for(let meme in this.memes){
          console.log(meme);
        }
      }
    );
  }


}
