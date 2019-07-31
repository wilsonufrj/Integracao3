import { Component, OnInit } from '@angular/core';
import { MemeService } from '../meme.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
})
export class FormPage implements OnInit {

  meme;
  searchtext: string;
  constructor( public memeService: MemeService ) { }

  getMeme(id):void{
    console.log(id);
    this.memeService.getMeme(id).subscribe(
      (res)=>{
        this.meme = res;
    });
  }
  ngOnInit() {
  }

}
