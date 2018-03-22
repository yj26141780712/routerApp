import { Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() name:string;
  constructor(private router:Router) { }

  LoginOut(){
    this.router.navigateByUrl("login"); 
  }
  ngOnInit() {
  }

}
