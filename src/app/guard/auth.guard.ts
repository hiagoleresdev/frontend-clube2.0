import { LoginAutenticacaoService } from './../form-login/login-autenticacao.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot,Router, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private authService: LoginAutenticacaoService,
    private router: Router
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
     if(this.authService.usuarioEstaAutenticado()){
       return true;
     } 
     
     this.router.navigate(['/login']);
     return false;
  }
}
