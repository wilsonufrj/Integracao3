import { Component } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { MemePopupComponent } from '../meme-popup/meme-popup.component'

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(public popupController: PopoverController) {}

  async presentPopover(ev:any) {
    const popover = await this.popupController.create({
      component: MemePopupComponent,
      componentProps: {
        'isNew': true
      },
      cssClass: 'meme-popover',
      event:ev,
      translucent: true,
    });
		console.log('No Meme');
    return await popover.present();
  }

}
