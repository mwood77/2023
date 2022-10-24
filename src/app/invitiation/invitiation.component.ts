import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invitiation',
  templateUrl: './invitiation.component.html',
  styleUrls: ['./invitiation.component.scss']
})
export class InvitiationComponent implements OnInit {

  constructor() { }

  pdfSrc = '../../assets/example.pdf';

  ngOnInit(): void {
  }

  downloadFile() {
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', this.pdfSrc);
    // link.setAttribute('href', 'abc.net/files/test.ino');
    link.setAttribute('download', 'example');
    document.body.appendChild(link);
    link.click();
    link.remove();
  }

}
