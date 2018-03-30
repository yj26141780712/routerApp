import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-template',
  templateUrl: './form-template.component.html',
  styleUrls: ['./form-template.component.css']
})
export class FormTemplateComponent implements OnInit {

  user={name:"yangjie",age:"",address:"宁波"}

  constructor() { }

  ngOnInit() {
  }

}
