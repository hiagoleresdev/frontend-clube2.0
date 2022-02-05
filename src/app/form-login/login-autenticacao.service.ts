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

    this.funcionarioService.ValidarFuncionario(usuario.Usuario, usuario.Senha).subscribe((response) => 
    {
      alert(response.body.message);
      this.usuarioAutenticado = true;
      this.mostrarMenuEmitter.emit(true);
      this.router.navigate(["/home"]);
    },
    (erro) =>
    {
      alert("O usuário informado não existe");
      this.usuarioAutenticado = false;
      this.mostrarMenuEmitter.emit(false);
    }
    )
  }
}
