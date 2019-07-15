import { Component } from '@angular/core';
import { MemeService } from '../meme.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
	meme;
	searchtext: string;
  constructor(public memeService: MemeService) {}

	getMeme(id):void{
			console.log(id);
			this.memeService.getMeme(id).subscribe(
					(res) => {
							console.log(res);
							this.meme = res;
					}
			);
	}

}
