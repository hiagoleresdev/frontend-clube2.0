import { Component } from '@angular/core';
import { LoginAutenticacaoService } from './forms/form-login/login-autenticacao.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'clube';

  mostrarMenu: boolean = false;

  constructor(private loginAutenticacaoService: LoginAutenticacaoService){

  }

  ngOnInit(){
    this.loginAutenticacaoService.mostrarMenuEmitter.subscribe(
      mostrar => this.mostrarMenu = mostrar
    );
  }

}
