import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  private registry = 'www.google.com';

  constructor() { }

  ngOnInit(): void {  }

  openExternalRegistry() {
    (window as any).open(this.registry, '_blank');
  }


}
