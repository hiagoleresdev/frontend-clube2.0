import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { CategoriaDTO } from '../CategoriaDTO';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type' : 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})

export class CategoriaDTOService {
  url= 'https://localhost:7156/api/Categoria';

  constructor(private http: HttpClient) { }



SalvarCategoria(categoriaDTO: CategoriaDTO) : Observable<any>{
  return this.http.post<CategoriaDTO>(this.url, categoriaDTO, httpOptions);
}

AtualizarCategoria(categoriaDTO : CategoriaDTO) : Observable<any>{
  return this.http.put<CategoriaDTO>(this.url, categoriaDTO, httpOptions);
}

ExcluirCategoria(categoriaid: number) : Observable<any>{
  const apiUrl = `${this.url}/${categoriaid}`;
  return this.http.delete<number>(apiUrl, httpOptions)
}


}
