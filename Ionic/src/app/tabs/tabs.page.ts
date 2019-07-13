import { Component } from '@angular/core';
import { MemeService } from '../meme.service';
import { ModalController } from '@ionic/angular';
import { MemePopupComponent } from '../meme-popup/meme-popup.component'

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(public modalController: ModalController) {}

  async presentModal(ev:any) {
    const modal = await this.modalController.create({
      component: MemePopupComponent,
      componentProps: {
        'isNew': true
      },
    });
		console.log('No Meme');
    return await modal.present();
  }

}
