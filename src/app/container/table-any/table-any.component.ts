import { Component, OnInit, Input } from '@angular/core';
import { KeysPipe } from '../../tool/pipe/keys.pipe';

@Component({
  selector: 'app-table-any',
  templateUrl: './table-any.component.html',
  styleUrls: ['./table-any.component.css'],
})
export class TableAnyComponent implements OnInit {

  @Input() settings = {
    columns: {
    }
  }
  @Input() source: any[]= [
  ]
  
  selectItem:any

  constructor() { }

  ngOnInit() {

  }
  
  click(item: any): void {
    this.selectItem === item ? this.selectItem = null : this.selectItem = item;
  }

}
