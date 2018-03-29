import { Component, OnInit, animate } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  name:string;

  constructor() { }

  ngOnInit() {
  }

  inputChange(name:string){  
      this.name=name;
      console.log(this.name);
  }
}