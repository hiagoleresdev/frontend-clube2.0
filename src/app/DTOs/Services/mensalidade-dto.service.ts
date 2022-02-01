import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { DependenteDTO } from '../DependenteDTO';
import { MensalidadeDTO } from '../MensalidadeDTO';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type' : 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class MensalidadeDTOService {
  url= 'https://localhost:7156/api/Mensalidade';


  constructor(private http: HttpClient) { }


  SalvarMensalidade(mensalidadeDTO: MensalidadeDTO) : Observable<any>{
    return this.http.post<MensalidadeDTO>(this.url, mensalidadeDTO, httpOptions);
  }

  AtualizarMensalidade(mensalidadeDTO : MensalidadeDTO) : Observable<any>{
    return this.http.put<MensalidadeDTO>(this.url, mensalidadeDTO, httpOptions);
  }

  ExcluirMensalidade(mensalidadeid: number) : Observable<any>{
    const apiUrl = `${this.url}/${mensalidadeid}`;
    return this.http.delete<number>(apiUrl, httpOptions)
  }
}
