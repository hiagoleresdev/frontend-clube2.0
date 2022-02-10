import { AuthGuard } from './guard/auth.guard';
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
  { path: "socio", component: FormsCadastroSocioComponent, canActivate:[AuthGuard]},
  { path: "dependente", component: FormsCadastroDependenteComponent, canActivate:[AuthGuard]},
  { path: "categoria", component: FormCategoriaComponent, canActivate:[AuthGuard]},
  { path: "mensalidade", component: FormMensalidadeComponent, canActivate:[AuthGuard]},
  { path: "home", component: HomeClubeComponent, canActivate:[AuthGuard]},

];

export const routing: ModuleWithProviders<any> = RouterModule.forRoot(routes);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
