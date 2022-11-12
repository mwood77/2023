import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invitiation',
  templateUrl: './invitiation.component.html',
  styleUrls: ['./invitiation.component.scss']
})
export class InvitiationComponent implements OnInit {

  constructor() { }

  pdfSrc = './assets/invite-sept6.pdf';
  pdfSrcHiRes = './assets/invite-sept6-hires.pdf';

  ngOnInit(): void {
  }

}
