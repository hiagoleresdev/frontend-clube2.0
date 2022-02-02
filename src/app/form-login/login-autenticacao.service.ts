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

    this.funcionarioService.ValidarFuncionario(usuario.Usuario, usuario.Senha).subscribe(response => 
    {
      if(response.status == 200)
      {
        this.usuarioAutenticado = true;

        this.mostrarMenuEmitter.emit(true);

        alert(response.body);

        this.router.navigate(["/home"]);
      }
      else if(response.status == 404)
      {
        this.usuarioAutenticado = false;

        this.mostrarMenuEmitter.emit(false);
        
        alert(response.body);
      }
      else
      {
        this.usuarioAutenticado = false;

        this.mostrarMenuEmitter.emit(false);

        alert(response.body)
      }
    })
  }
}
