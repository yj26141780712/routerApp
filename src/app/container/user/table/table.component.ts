import { UserinfoService } from './../../../userinfo.service';
import { Component, OnInit } from '@angular/core';
import { Userinfo } from '../../../userinfo';
import "rxjs/Rx";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  userinfos:Userinfo[];
  constructor(private userinfoService:UserinfoService) { }

  ngOnInit() {
    this.userinfoService.getUserinfos().subscribe(
      userinfos => this.userinfos = userinfos
    );

    this.userinfoService.subject.asObservable().concatMap(params => {
      return this.userinfoService.serch(params);
    }).subscribe(
      userinfos => this.userinfos = userinfos
    );
  }

}
