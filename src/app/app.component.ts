import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = '2023';
  authed = false;

  constructor(private authService: AuthService) {}
  
  ngOnInit(): void {
    this.authService.authenticated$.subscribe(
      (val) => {
        this.authed = val;
      }
    )
  }



}
