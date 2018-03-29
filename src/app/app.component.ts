import { Component, OnInit } from '@angular/core';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { PromiseObservable } from 'rxjs/observable/PromiseObservable';
import { Http,Headers } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  headers = new Headers({'Content-Type': 'application/json'});
  constructor(private http:Http) {
  }
  dostring1(): Promise<string> {
    return new Promise((resolve) => {
      setTimeout(() => {
        //reject("我返回了异步失败结果!");
        resolve("我返回了异步成功结果1!");
      }, 1000);
    })
  }
  ngOnInit(){

  }
}
