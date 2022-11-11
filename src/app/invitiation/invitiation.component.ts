import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invitiation',
  templateUrl: './invitiation.component.html',
  styleUrls: ['./invitiation.component.scss']
})
export class InvitiationComponent implements OnInit {

  constructor() { }

  pdfSrc = './assets/example.pdf';

  ngOnInit(): void {
  }

}
