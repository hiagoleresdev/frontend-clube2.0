import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Funcionario } from '../Funcionario';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type' : 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService{
  url= 'https://localhost:7156/api/Mensalidade';

constructor(private http: HttpClient) { }

  PegarPeloId(funcionarioid: number): Observable<Funcionario>{
    const apiUrl = `${this.url}/${funcionarioid}`;
    return this.http.get<Funcionario>(apiUrl);
  }

  ValidarFuncionario(usuario: string, senha: string) : Observable<any>{
    const apiUrl = `${this.url}/${usuario}/${senha}`;
    return this.http.get(apiUrl, {responseType: "text", observe: 'response'});
  }

}
