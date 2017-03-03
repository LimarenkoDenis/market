import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AngularFire, AuthMethods, AuthProviders } from 'angularfire2';

@Injectable()
export class LoginService {

  private _angularFire: AngularFire;
  private _router: Router;

  public constructor(_angularFire: AngularFire, _router: Router) {
    this._angularFire = _angularFire;
  }

  public login(): void {
    this._router.navigate[''];
  }

  public logOut(): void {
  }

  public isSignIn(): boolean {
    return true;
  }
}
