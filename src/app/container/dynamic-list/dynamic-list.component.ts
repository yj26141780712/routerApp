import { Component, OnInit } from '@angular/core';
import { DynamicService } from '../../tool/service/dynamic.service';
import { Dynamic } from '../../tool/class/dynamic';

@Component({
  selector: 'app-dynamic-list',
  templateUrl: './dynamic-list.component.html',
  styleUrls: ['./dynamic-list.component.css']
})
export class DynamicListComponent implements OnInit {

  dynamics:Dynamic[];
  showIndex:number=0;


  constructor(private dynamicService:DynamicService) { }

  ngOnInit() {
    this.dynamics=this.dynamicService.getDynamics();
  }

  pre(){
    this.showIndex=--this.showIndex;
    console.log(this.showIndex);
    this.dynamicService.dynamicsubject.next(this.showIndex);
  }

  next(){
    this.showIndex=++this.showIndex;
    console.log(this.showIndex);
    this.dynamicService.dynamicsubject.next(this.showIndex);
  }
}
