import { Component, OnInit } from '@angular/core';
import { MemeService } from '../meme.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
})
export class FormPage implements OnInit {

  meme;
  searchtext: string;
  form = {
    method: ''
    
  }
  constructor(
    public memeService: MemeService,
    public router: Router) { }

  getMeme(id):void{
    console.log(id);
    this.memeService.getMeme(id).subscribe(
      (res)=>{
        this.meme = res[0];
        this.form = this.meme;
    });
  }
  ngOnInit() {
  }

  onSubmit(){ 
    console.log(this.form)
    switch(this.form.method){
      case "post": 
        console.log('postititpoo');
        this.memeService.createMeme(this.form).subscribe((res)=>{console.log(res);});
        break;
      case "put":
        console.log('putititpoo');
        this.memeService.updateMeme(this.form, this.meme.id).subscribe((res)=>{console.log(res);});
        break;
      case"delete":
        console.log('deletetipoo');
        this.memeService.deleteMeme(this.meme.id).subscribe((res)=>{window.location.href = res});
        break;
    }
    this.router.navigate(['tabs/tab2']);
  }
}
