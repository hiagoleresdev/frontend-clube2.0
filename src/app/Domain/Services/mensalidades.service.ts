import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Mensalidade } from '../Mensalidade';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type' : 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class MensalidadesService {
  url= 'https://localhost:7156/api/Mensalidade';
  constructor(private http: HttpClient) { }

  PegarTodos(): Observable<Mensalidade[]>{
    return this.http.get<Mensalidade[]>(this.url);
  }

  PegarPeloId(mensalidadesid: number): Observable<Mensalidade>{
    const apiUrl = `${this.url}/${mensalidadesid}`;
    return this.http.get<Mensalidade>(apiUrl);
  }


}
