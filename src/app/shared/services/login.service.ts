import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AngularFire, AuthMethods, AuthProviders, FirebaseAuthState } from 'angularfire2';

@Injectable()
export class LoginService {


  public constructor(
    private _angularFire: AngularFire,
    private _router: Router
  ) {}

  public login(user: User): firebase.Promise<FirebaseAuthState> {
    return this._angularFire.auth.login(
      {
        email: user.email,
        password: user.password
      },
      {
        provider: AuthProviders.Password,
        method: AuthMethods.Password,
      }
    );
  }

  public logOut(): void {
  }

  public isSignIn(): boolean {
    return true;
  }
}
