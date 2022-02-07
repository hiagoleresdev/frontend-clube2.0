import { NgModule } from "@angular/core";
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';

import { FormLoginComponent } from "./form-login/form-login.component";
import { FormCategoriaComponent } from "./form-categoria/form-categoria.component";
import { FormMensalidadeComponent } from "./form-mensalidade/form-mensalidade.component";
import { FormsCadastroDependenteComponent } from "./forms-cadastro-dependente/forms-cadastro-dependente.component";
import { FormsCadastroSocioComponent } from "./forms-cadastro-socio/forms-cadastro-socio.component";

import { CategoriaDTO } from "src/app/DTOs/CategoriaDTO";
import { CategoriaService } from "src/app/Domain/Services/categoria.service";
import { SocioDTO } from "src/app/DTOs/SocioDTO";
import { SocioDTOService } from "src/app/DTOs/Services/socio-dto.service";
import { DependenteDTO } from "src/app/DTOs/DependenteDTO";
import { DependenteDTOService } from "src/app/DTOs/Services/dependente-dto.service";
import { MensalidadeDTO } from "src/app/DTOs/MensalidadeDTO";
import { MensalidadeDTOService } from "src/app/DTOs/Services/mensalidade-dto.service";
import { AnimacaoOndasComponent } from "src/app/animacao-ondas/animacao-ondas.component";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { TextMaskModule } from 'angular2-text-mask';
import { NgxMaskModule, IConfig } from 'ngx-mask'
import { HomeClubeComponent } from "src/app/home-clube/home-clube.component";
import { ModalModule } from "ngx-bootstrap/modal";


export const options: Partial<IConfig> | (() => Partial<IConfig>) = null;

@NgModule({
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    TextMaskModule,
    ModalModule.forRoot(),
    NgxMaskModule.forRoot(),
    NgbModule
  ],
  exports: [],
  declarations: [
    HomeClubeComponent,
    FormsCadastroSocioComponent,
    FormCategoriaComponent,
    FormMensalidadeComponent,
    FormLoginComponent,
    FormsCadastroDependenteComponent,
    AnimacaoOndasComponent
    ],
  providers: [
    CategoriaDTO,CategoriaService,
    SocioDTO,SocioDTOService,
    DependenteDTO,DependenteDTOService,
    MensalidadeDTO,MensalidadeDTOService
  ],
})
export class FormsModules{ }
