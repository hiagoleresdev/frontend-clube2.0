import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DependenteDTO } from '../DependenteDTO';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type' : 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class DependenteDTOService {
  url= 'https://localhost:7156/api/Dependente';

  constructor(private http: HttpClient) { }

  SalvarDependente(dependenteDTO: DependenteDTO) : Observable<any>{
    return this.http.post<DependenteDTO>(this.url, dependenteDTO, httpOptions);
  }

  AtualizarDependente(dependenteDTO : DependenteDTO) : Observable<any>{
    return this.http.put<DependenteDTO>(this.url, dependenteDTO, httpOptions);
  }

  ExcluirDependente(dependenteid: number) : Observable<any>{
    const apiUrl = `${this.url}/${dependenteid}`;
    return this.http.delete<number>(apiUrl, httpOptions)
  }
}
