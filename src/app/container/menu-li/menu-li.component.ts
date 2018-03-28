import { Component, OnInit, Input, trigger, state, style, transition, animate } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-li',
  templateUrl: './menu-li.component.html',
  styleUrls: ['./menu-li.component.css'],
  animations: [
    trigger('openState', [
      state('yes', style({
         display:"block"
      })),
      state('no',   style({
         display:"none"
      })),
      transition('* => *', animate('600ms ease')),
     // transition('no => yes', animate('1000ms ease-in'))
    ])
  ]
})
export class MenuLiComponent implements OnInit {

  //@Input() links:any;
  @Input() link:any;
  //state:string;
  
  state:string="no";
  constructor(private router: Router) { 
       
  }

  ngOnInit() {
    //console.log(this.links);
  }
  
  click(link:any){
    console.log(link);
    //this.selectedLink == link?this.selectedLink=null:this.selectedLink = link;
    this.state =  this.state=='yes' ? 'no' : 'yes';   
    console.log(this.state );
    //console.log(this.state);
    //return false;
  }
}
