import { LinkService } from './../../link.service';
import { Link } from './../../link';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.css']
})
export class LeftComponent implements OnInit {

  links:any;

  selectedLink:Link;
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
      //console.log(this.links);
     //console.log(this.links);
  }

  click(link:Link):void{
    this.selectedLink==link?null:this.selectedLink=link;
    //console.log(this.selectedLink==link);
  }

}
