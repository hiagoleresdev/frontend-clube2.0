import { ModuleWithProviders, NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormLoginComponent } from './form-login/form-login.component';
import { FormsCadastroSocioComponent} from './forms-cadastro-socio/forms-cadastro-socio.component';
import { FormCategoriaComponent } from './form-categoria/form-categoria.component';
import { FormMensalidadeComponent } from './form-mensalidade/form-mensalidade.component';
import { HomeClubeComponent } from './home-clube/home-clube.component';
import { FormsCadastroDependenteComponent } from './forms-cadastro-dependente/forms-cadastro-dependente.component';

const routes: Routes = [
  
  { path: "", redirectTo: "login", pathMatch: 'full'},
  { path: "login", component: FormLoginComponent},
  { path: "socio", component: FormsCadastroSocioComponent},
  { path: "dependente", component: FormsCadastroDependenteComponent},
  { path: "categoria", component: FormCategoriaComponent},
  { path: "mensalidade", component: FormMensalidadeComponent},
  { path: "home", component: HomeClubeComponent},

];

export const routing: ModuleWithProviders<any> = RouterModule.forRoot(routes);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
