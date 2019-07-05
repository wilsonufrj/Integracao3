import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-meme-modal',
  templateUrl: './meme-modal.page.html',
  styleUrls: ['./meme-modal.page.scss'],
})
export class MemeModalPage {

  @Input() nome:string;
  @Input() descricao:string;
  @Input() nivel:number;
  @Input() imagem:string;
  
  constructor() { }

}
