import { LinkService } from './../../link.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-tree-test',
  templateUrl: './left-tree-test.component.html',
  styleUrls: ['./left-tree-test.component.css']
})
export class LeftTreeTestComponent implements OnInit {

  links:any;

  constructor(private linkService:LinkService) { }

  getLinks():void{
    this.linkService.getLinks().subscribe(links=>this.links=links);
    // this.links=[
    //    { id: 1, path: "/button", name: 'button' },
    //    { id: 2, path: "/navigation", name: 'navigation' },
    // ]
  }
  ngOnInit() {
    this.getLinks();
  }

}
