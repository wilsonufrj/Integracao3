import { Component } from '@angular/core';
import { MemeService }  from '../meme.service';
import { ModalController } from '@ionic/angular';
import { MemePopupComponent } from '../meme-popup/meme-popup.component'

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  memes;
	data;
  constructor(
    public memeService: MemeService,
    public popupController: ModalController) {

  }

  async presentPopover(meme,ev:any) {
    const popover = await this.popupController.create({
      component: MemePopupComponent,
			componentProps:{
        'id': meme.id,
				'nome': meme.nome,
				'descricao': meme.descricao,
				'nivel': meme.nivel,
        'imagem': meme.imagem,
        'isNew': false
      }
    });
		popover.onDidDismiss().then((data) => {
			this.data = data['changed'];
			if(this.data){
				this.updateMemes();
				this.data = false;
			}
		});
		console.log(meme);

    return await popover.present();
  }

	updateMemes(): void {
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

  ngOnInit(){
		this.updateMemes();
  }


}
