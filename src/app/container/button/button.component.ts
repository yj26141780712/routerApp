import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  isOpen:boolean = false;

  constructor() { }

  ngOnInit() {
  }
  click():void{
    this.isOpen = true;
  }

  close():void{
    this.isOpen = false;
  }

}
