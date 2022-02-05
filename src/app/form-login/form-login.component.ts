import { Usuario } from './usuario';
import { LoginAutenticacaoService } from './login-autenticacao.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent implements OnInit 
{

  usuario: Usuario = new Usuario();

  constructor(private loginAutenticacaoService: LoginAutenticacaoService) {}

  ngOnInit(): void { }

  fazerLogin()
  {
    this.loginAutenticacaoService.fazerLogin(this.usuario);
  }

}
