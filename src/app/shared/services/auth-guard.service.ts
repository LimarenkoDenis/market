import { LoginService } from './login.service';
import { Injectable }  from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Injectable()
export class AuthGuardService implements CanActivate {

  public constructor(
    private _loginService: LoginService,
    private _route: ActivatedRoute,
  ) {}

  public canActivate(route: ActivatedRouteSnapshot): boolean {
    // return this._loginService.isSignIn();
    const currentUser: string = 'admin';
    const roles: string[] = route.data['roles'];

    return (roles === null || roles.indexOf(currentUser) !== -1);
  }
}

