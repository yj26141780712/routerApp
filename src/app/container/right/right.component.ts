import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-right',
  templateUrl: './right.component.html',
  styleUrls: ['./right.component.css']
})
export class RightComponent implements OnInit {

  @Input() path :string; 

  constructor() { }

  ngOnInit() {
  }

}
