import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria } from '../Categoria';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type' : 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  url= 'https://localhost:7156/api/Categoria';

constructor(private http: HttpClient) { }

PegarTodos(): Observable<Categoria[]>{
  return this.http.get<Categoria[]>(this.url);
}

PegarPeloId(categoriaId: number): Observable<Categoria>{
  const apiUrl = `${this.url}/${categoriaId}`;
  return this.http.get<Categoria>(apiUrl);
}

AtualizarCategoria(categoria : Categoria) : Observable<any>{
  return this.http.put<Categoria>(this.url, categoria, httpOptions);
}

}
