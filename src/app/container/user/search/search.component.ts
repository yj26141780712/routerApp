import { UserinfoService } from './../../../userinfo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private userinfoService:UserinfoService) { }

  onclick(){
    this.userinfoService.subject.next("");
  }
  ngOnInit() {
  }

}
