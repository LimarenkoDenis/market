import { LoginService } from './login.service';
import { Injectable }  from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable()
export class AuthGuardService implements CanActivate {


  public constructor(
    private _loginService: LoginService
  ) {}

  public canActivate(): boolean {
    return this._loginService.isSignIn();
  }
}

