import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public authenticated$ = new BehaviorSubject<boolean>(false);

  constructor() { }

  loggedIn() {
    if (localStorage.getItem('token') == 'secretToken'){
      this.authenticated$.next(true);
    }
    return this.authenticated$.getValue();
  }

  getToken() {
    return localStorage.getItem('token');
  }


}
