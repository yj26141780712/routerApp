import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-ngx-tabletest',
  templateUrl: './ngx-tabletest.component.html',
  styleUrls: [
    './ngx-tabletest.component.css',
  ],
})
export class NgxTabletestComponent implements OnInit {

 
  rows = [];
  loadingIndicator: boolean = true;
  reorderable: boolean = true;

  columns = [
    { prop: 'name' },
    { name: 'Gender' },
    { name: 'Company' }
  ];

  constructor() {
    this.fetch((data) => {
      this.rows = data;
      setTimeout(() => { this.loadingIndicator = false; }, 1500);
    });
  }

  fetch(cb) {
    const req = new XMLHttpRequest();
    req.open('GET', `assets/data/company.json`);

    req.onload = () => {
      cb(JSON.parse(req.response));
    };

    req.send();
  }
  ngOnInit() {
  }

}
