import { LoginService } from './../shared/services/login.service';
import { Component, OnInit } from '@angular/core';
import { AngularFire } from 'angularfire2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public error;
  public user = {
    email:    '',
    password: ''
  };

  constructor(
    public af: AngularFire,
    private _router: Router,
    private _LoginService: LoginService
  ) {
    this.af.auth.subscribe(auth => {
      console.log(auth);
      if (auth) {
        console.log('authorised');
      }
    });
  }

  ngOnInit() {
  }

  onSubmit(user) {
    this._LoginService.login(user)
    .then(data => {
      window.localStorage.setItem('user', JSON.stringify(data));
      this._router.navigate(['']);
      console.log(data);
    })
    .catch(error => {
      console.log(error);
      this.error = error;
    });
  }
}


