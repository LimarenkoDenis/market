import { LoginService } from './login.service';
import { Injectable }  from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private _LoginService: LoginService) { }

  canActivate(): boolean {
    return this._LoginService.isSignIn();
  }
}

