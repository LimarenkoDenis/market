import { LoginService } from './login.service';
import { Injectable }  from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable()
export class AuthGuardService implements CanActivate {

  private _loginService: LoginService;

  public constructor(_loginService: LoginService) {
    this._loginService = _loginService;
  }

  public canActivate(): boolean {
    return this._loginService.isSignIn();
  }
}

