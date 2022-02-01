import { Usuario } from './usuario';
import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { FuncionarioService } from '../Domain/Services/funcionario.service';

@Injectable({
  providedIn: 'root'
})
export class LoginAutenticacaoService {

  private usuarioAutenticado: boolean = false;

  mostrarMenuEmitter = new EventEmitter<boolean>();

  constructor(private router: Router, private funcionarioService: FuncionarioService) { }

  fazerLogin(usuario: Usuario)
  {

     if(this.funcionarioService.ValidarFuncionario(usuario.nome, usuario.senha)){

       this.usuarioAutenticado = true;

       this.mostrarMenuEmitter.emit(true);

       this.router.navigate(["/home"]);
     } else {
       this.usuarioAutenticado = false;

       this.mostrarMenuEmitter.emit(false);
     }
}
}
