import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-table-any',
  templateUrl: './table-any.component.html',
  styleUrls: ['./table-any.component.css']
})
export class TableAnyComponent implements OnInit {

  @Input() settings:any

  @Input() source:any

  constructor() { }

  ngOnInit() {
  
  }

}
