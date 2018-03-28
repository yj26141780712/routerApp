import { Http, Headers } from '@angular/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {

  headers: Headers
  constructor(private http: Http) { }

  ngOnInit() {
  }
  click() {
    this.http.post("http://localhost:3000/api", { }, { headers: this.headers }).pipe().map((data) => {
       console.log(data);
    });
  }
}
