import { UserinfoService } from './../../../userinfo.service';
import { Component, OnInit } from '@angular/core';
import { Userinfo } from '../../../userinfo';
import "rxjs/Rx";
import { Observable } from "rxjs/Observable";
import { Userinfos } from '../../../mock-userinfo';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  userinfos: Userinfo[];
  userinfosAll: Userinfo[];
  selectUserinfo: Userinfo;
  totalItems: number;
  currentPage: number = 1;
  itemsPerPage: number = 10;
  constructor(private userinfoService: UserinfoService) { }

  ngOnInit() {
    this.userinfoService.getUserinfos().subscribe(
      userinfos => {
        this.userinfosAll = userinfos;
        this.totalItems = this.userinfosAll.length;
        this.userinfos = this.userinfoService.getcurrentPage(userinfos, 1, this.itemsPerPage);
      }
    );

    this.userinfoService.subject.asObservable().concatMap(params => {
      return this.userinfoService.serch(params);
    }).subscribe(
      userinfos => {
        this.userinfosAll = userinfos;
        this.totalItems = this.userinfosAll.length;
        this.userinfos = this.userinfoService.getcurrentPage(userinfos, 1, this.itemsPerPage);
      }
    );

    this.userinfoService.delsubject.asObservable().subscribe(
      () => {
        this.userinfos = this.userinfosAll = this.userinfosAll.filter(h => h !== this.selectUserinfo);
        this.userinfos = this.userinfosAll = this.userinfoService.getcurrentPage(this.userinfos, this.currentPage, this.itemsPerPage);
        this.totalItems = this.userinfos.length;
      }
    );

    this.userinfoService.addsubject.asObservable().subscribe(
      userinfo => {
        this.userinfos.push(userinfo);
        this.totalItems = this.userinfos.length;
        this.userinfos = this.userinfosAll = this.userinfoService.getcurrentPage(this.userinfos, this.currentPage, this.itemsPerPage);
        console.log(this.totalItems);
      }
    );

    this.userinfoService.editsubject.asObservable().subscribe( //
      userinfo => {
        this.selectUserinfo = userinfo;
      }
    );
  }

  click(u: Userinfo): void {
    this.selectUserinfo == u ? this.selectUserinfo = null : this.selectUserinfo = u
    this.userinfoService.selectsubject.next(this.selectUserinfo);
  }

  pageChanged(event: any): void {
    console.log(event);
    this.currentPage = event.page;
    this.userinfos = this.userinfoService.getcurrentPage(this.userinfosAll, this.currentPage, this.itemsPerPage);
  }
}
