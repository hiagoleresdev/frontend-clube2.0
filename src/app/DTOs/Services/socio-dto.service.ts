import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SocioDTO } from '../SocioDTO';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type' : 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class SocioDTOService {

  url= 'https://localhost:7156/api/Socio';

  constructor(private http: HttpClient) { }

  SalvarSocio(socio: SocioDTO) : Observable<any>{
    return this.http.post<SocioDTO>(this.url, socio, httpOptions);
  }

  AtualizarSocio(socio : SocioDTO) : Observable<any>{
    return this.http.put<SocioDTO>(this.url, socio, httpOptions);
  }

  ExcluirSocio(socioId: number) : Observable<any>{
    const apiUrl = `${this.url}/${socioId}`;
    return this.http.delete<number>(apiUrl, httpOptions)
  }


}
