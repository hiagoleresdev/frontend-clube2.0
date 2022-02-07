import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ModalModule } from 'ngx-bootstrap/modal';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarClubeComponent } from './navbar-clube/navbar-clube.component';


import { LoginAutenticacaoService } from './forms/form-login/login-autenticacao.service';
import { routing } from './app-routing.module';
import { HomeClubeComponent } from './home-clube/home-clube.component';


import { CategoriaService } from './Domain/Services/categoria.service';
import { DependenteService } from './Domain/Services/dependente.service';
import { FuncionarioService } from './Domain/Services/funcionario.service';
import { MensalidadesService } from './Domain/Services/mensalidades.service';
import { SocioService } from './Domain/Services/socio.service';

import { FormsModules } from './forms/forms-module';
import { TextMaskModule } from 'angular2-text-mask';
import { NgxMaskModule, IConfig } from 'ngx-mask'

@NgModule({
  declarations: [
    AppComponent,
    NavbarClubeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModules,
    FormsModule,
    routing,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
  ],
  providers: [LoginAutenticacaoService, HttpClientModule, CategoriaService,
  DependenteService, FuncionarioService, MensalidadesService, SocioService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
