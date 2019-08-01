import { Component } from '@angular/core';
import { MemeService } from '../meme.service';

@Component({
	selector: 'app-tab2',
	templateUrl: 'tab2.page.html',
	styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
	memes;
	constructor(public memeService: MemeService) {
	}

	getMemes(): void {
		this.memeService.getMemes().subscribe(
			(res) => {
				console.log(res);
				this.memes = res;
			}
		);
	}

	getMeme(id): void {
		this.memeService.getMeme(id).subscribe(
			(res) => {
				console.log(res);
				this.memes = res;
			}
		);
	}


	updateMeme(meme): void {
		this.memeService.updateMeme(meme, meme.id).subscribe(
			(res) => {
				console.log(res);
				this.memes = res;
			}
		);
	}

	deleteMeme(meme): void {
		this.memeService.deleteMeme(meme.id).subscribe(
			(res) => {
				console.log(res);
			}
		);
	}

	createMeme(meme): void {
		this.memeService.createMeme(meme).subscribe(
			(res) => {
				console.log(res);
			}
		);
		
	}
}
