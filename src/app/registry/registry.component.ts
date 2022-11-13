import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registry',
  templateUrl: './registry.component.html',
  styleUrls: ['./registry.component.scss']
})
export class RegistryComponent implements OnInit {

  registrySource = 'https://cadeaulijst.theperfectwedding.nl/nina-en-michael/inloggen';

  constructor() { }

  ngOnInit(): void {
  }

}
