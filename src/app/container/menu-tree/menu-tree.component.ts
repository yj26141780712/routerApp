import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: '[app-menu-tree]',
  templateUrl: './menu-tree.component.html',
  styleUrls: ['./menu-tree.component.css']
})
export class MenuTreeComponent implements OnInit {

  @Input() links:any;

  
  @Input() selectedLink:any;

  constructor() { }

  ngOnInit() {
  }

}
