import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: '[app-menu-li]',
  templateUrl: './menu-li.component.html',
  styleUrls: ['./menu-li.component.css']
})
export class MenuLiComponent implements OnInit {

  @Input() selectedLink;
  @Input() links:any;

  constructor(private router: Router) { 
       
  }

  ngOnInit() {
  }
  
  click(event,link:any){
    console.log(link.name);
    if(link.path!="#"&&this.selectedLink != link){
      this.router.navigate([link.path],{queryParams:{}});
    }
    this.selectedLink == link?this.selectedLink=null:this.selectedLink = link;
    return false;
  }
}
