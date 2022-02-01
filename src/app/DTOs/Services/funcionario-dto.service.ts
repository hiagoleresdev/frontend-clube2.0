import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type' : 'application/json'
    })
  }

@Injectable({
    providedIn: 'root'
  })

export class FuncionarioDTO{
  url= 'https://localhost:7156/api/Funcionario';

    usuario: string;
    senha: string;

    constructor(private http: HttpClient) { }


  SalvarFuncionario(funcionarioDTO: FuncionarioDTO) : Observable<any>{
    return this.http.post<FuncionarioDTO>(this.url, funcionarioDTO, httpOptions);
  }

  AtualizarFuncionario(funcionarioDTO : FuncionarioDTO) : Observable<any>{
    return this.http.put<FuncionarioDTO>(this.url, funcionarioDTO, httpOptions);
  }

  ExcluirFuncionario(funcionarioid: number) : Observable<any>{
    const apiUrl = `${this.url}/${funcionarioid}`;
    return this.http.delete<number>(apiUrl, httpOptions)
  }

  ValidarFuncionario(usuario: string, senha: string) : Observable<any>{
    return this.http.get<number>(this.url);
  }

}
