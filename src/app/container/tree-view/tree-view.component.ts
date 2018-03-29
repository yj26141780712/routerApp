import { Component, OnInit, Input, trigger, state, style, transition, animate } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: '[app-tree-view]',
  templateUrl: './tree-view.component.html',
  styleUrls: ['./tree-view.component.css'],
  animations: [
    trigger('openState', [
      state('yes', style({
        height: "*",
      })),
      state('no', style({
        height: "0px",
      })),
      transition('* => *', animate('300ms ease-out')),
      //transition('no => yes', animate('600ms ease')),
      // transition('no => yes', animate('1000ms ease-in'))
    ])
  ]
})
export class TreeViewComponent implements OnInit {

  @Input() selectedLink;
  @Input() links: any;

  //state:string="out";
  constructor(private router: Router) {

  }
  ngOnInit() {
  }

  click(event, link: any) {
    //console.log(link.name);
    if (link.path != "#" && this.selectedLink != link) {
      this.router.navigate([link.path], { queryParams: { path: link.path } });
    }
    this.selectedLink == link ? this.selectedLink = null : this.selectedLink = link;
  }
}
