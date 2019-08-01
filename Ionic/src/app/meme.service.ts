import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MemeService {

  backendURL:string = "https://localhost:8000/api/";
  constructor(private http: HttpClient) { }

  public getMemes():Observable<any> {
    return this.http.get(
      this.backendURL + 'meme');
  }

	public getMeme(id):Observable<any> {
			return this.http.get(
					this.backURL + 'meme/' + id);
	}

  public createMeme(meme):Observable<any> {
    return this.http.post(
      this.backendURL + 'meme', {
        nome: meme.name,
        descricao: meme.descricao,
        nivel: meme.level,
        imagem: meme.imagem
      });
  }

  public updateMeme(meme,id) {
    return this.http.put(
      this.backendURL + 'meme/' + id, {
        nome: meme.nome,
        descricao: meme.descricao,
        nivel: meme.nivel,
        imagem: meme.imagem
      });
  }

  public deleteMeme(id):Observable<any> {
    return this.http.delete(
      this.backendURL + id
    );
  }
}
