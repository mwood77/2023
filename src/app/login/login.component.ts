import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ErrorStateMatcher } from '@angular/material/core';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginUserData: User = { password: '' };
  allowedPassword = environment.password;

  constructor(private _auth: AuthService, private router: Router) {}

  ngOnInit(): void { }

  loginUser() {
    if (
      this.loginUserData.password == this.allowedPassword
    ) {
      localStorage.setItem('token', 'secretToken');
      this.router.navigate(['']);
    }
  }
}


export interface User {
  password: string;
}