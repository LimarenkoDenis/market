import { Router } from '@angular/router';
import { LoginService } from './../shared/services/login.service';
import { Component, OnInit } from '@angular/core';
import { AngularFire } from 'angularfire2';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user: FormGroup;
  public error: FirebaseError;

  public constructor(
    private _loginService: LoginService,
    private _fb: FormBuilder,
    private _router: Router
  ) {
    this.user = this._fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  public ngOnInit(): void {
  }

  public onSubmit(user: FormGroup): void {
    this._loginService.login(user.value)
    .then(() => {
      this._router.navigate(['']);
    })
    .catch((error: FirebaseError) => this.error = error);
  }
}


