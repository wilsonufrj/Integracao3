import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MemeService {

  backendURL:string = "http://localhost:8000/api/";
  constructor(private http: HttpClient) { }

  public getMemes():Observable<any> {
    return this.http.get(
      this.backendURL + 'meme');
  }

  public createMeme(meme):Observable<any> {
    return this.http.post(
      this.backendURL + 'meme', {
        nome: meme.nome,
        descricao: meme.descricao,
        nivel: meme.nivel,
        imagem: meme.imagem
      });
  }

  public updateMeme(meme,id):Observable<any> {
		console.log(this.backendURL + 'meme/' + id);
    return this.http.put(
      this.backendURL + 'meme/' + id, {
        nome: meme.nome,
        descricao: meme.descricao,
        nivel: meme.nivel,
        imagem: meme.imagem
      });
  }

  public deleteMeme(meme,id):Observable<any> {
    return this.http.delete(
      this.backendURL + "meme/" + id
    );
  }
}
