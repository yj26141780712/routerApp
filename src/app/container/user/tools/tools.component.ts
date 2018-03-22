import { UserinfoService } from './../../../userinfo.service';
import { Component, OnInit } from '@angular/core';
import { Userinfo } from '../../../userinfo';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.css']
})
export class ToolsComponent implements OnInit {

  constructor(private userinfoService:UserinfoService) { }

  ngOnInit() {
    
  }

  add():void{
    let userinfo=new Userinfo(5,"admin","admin","admin");
    this.userinfoService.addsubject.next(userinfo);
  }
  del():void{
    this.userinfoService.delsubject.next();
  }
}
