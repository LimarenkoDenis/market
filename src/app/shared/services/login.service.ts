import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';

@Injectable()
export class LoginService {
  public currentUser;

  constructor(
    private _af: AngularFire,
    private _router: Router
  ) {

  }

  login(user) {
    return this._af.auth.login(
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

  logOut() {
    this._af.auth.logout();
  }

  isSignIn () {
    let user = window.localStorage.getItem('user');
    console.log(user);
    if (user) {
      this.currentUser = JSON.parse(window.localStorage.getItem('user'));
      console.log('user exist');
      return true;
    }
    console.log('eror');
    this._router.navigate(['login']);
    return false;
  }
}
