import { Component } from '@angular/core';
import { MemeService } from './meme.service';

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
				window.location.href = res;
			}
		);
	}

	getMeme(id): void {
		this.memeService.getMeme(id).subscribe(
			(res) => {
				console.log(res);
			}
		);
	}


	updateMeme(meme): void {
		this.memeService.updateMeme(meme, meme.id).subscribe(
			(res) => {
				console.log(res);
			}
		);
	}

	function deleteMeme(meme): void {
		this.memeService.deleteMeme(meme.id).subscribe(
			(res) => {
				console.log(res);
			}
		);
	}

	createMeme(meme): void {
		this.memeService.createMeme(meme).subscribe(
			(res) => {}
		);
		console.log(res);
	}
}
