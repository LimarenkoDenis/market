import { LoginService } from './../shared/services/login.service';
import { Component, OnInit } from '@angular/core';
import { AngularFire } from 'angularfire2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private _loginService: LoginService;

  public constructor(_loginService: LoginService) {
    this._loginService = _loginService;
  }

  public ngOnInit(): void {
  }

  public onSubmit(): void {
    this._loginService.login();
  }
}


