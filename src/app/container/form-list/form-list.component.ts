import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-list',
  templateUrl: './form-list.component.html',
  styleUrls: ['./form-list.component.css']
})
export class FormListComponent implements OnInit {

  value1:string;
  value2:string;
  value3:string;
  constructor() { }

  ngOnInit() {
  }

  keyup1(value:string){
    this.value1=value;
  }

  keyup2(e:any){
    console.log(666);
    this.value2=e.target.value;
  }

  blur(e:any){
    this.value3=e.target.value;
  }

}
