import { UserinfoService } from './../../userinfo.service';
import { Component, OnInit, animate } from '@angular/core';
import { EmitServiceService } from '../../tool/service/emit-service.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  name: string;
  ngName: string;
  word: string = "Yang";

  json: any;
  constructor(private emitService: EmitServiceService, private userService: UserinfoService) {
    // console.log("我订阅了");
    // this.emitService.eventEmit.subscribe((name) => {
    //   console.log("我触发了！");
    //   this.name = name;
    // })
    this.userService.getUserinfos().subscribe((json) => { 
      console.log(json[0]);
      this.json = json; 
    });
  }

  ngOnInit() {
    
  }

  inputChange(name: string) {
    console.log(this.name);
    this.name = name;
  }

  keyup(name) {
    this.ngName = name;
    return false;
  }
}