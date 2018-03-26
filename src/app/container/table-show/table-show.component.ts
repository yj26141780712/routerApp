import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-show',
  templateUrl: './table-show.component.html',
  styleUrls: ['./table-show.component.css']
})
export class TableShowComponent implements OnInit {

  settings = {
    columns: {
      id: {
        title: 'Id'
      },
      username: {
        title: '用户名'
      },
      password: {
        title: '密码'
      },
      name: {
        title: '姓名'
      },
      email:{
        title:"邮箱"
      }
    }
  }

  source = [
    { id: 1, username: "yangjie", password: "Aa123", name: "杨杰" },
    { id: 2, username: "zhaoguangming", password: "Aa123", name: "赵光明" },
    { id: 3, username: "zhaozhicheng", password: "Aa123", name: "赵之琛" },
    { id: 4, username: "zhouxuyang1", password: "Aa123", name: "周旭阳" },
    { id: 5, username: "zhouxuyang2", password: "Aa123", name: "周旭阳" },
    { id: 6, username: "zhouxuyang3", password: "Aa123", name: "周旭阳" },
    { id: 7, username: "zhouxuyang4", password: "Aa123", name: "周旭阳" },
    { id: 8, username: "zhouxuyang5", password: "Aa123", name: "周旭阳" },
    { id: 9, username: "zhouxuyang6", password: "Aa123", name: "周旭阳" },
    { id: 10, username: "zhouxuyang7", password: "Aa123", name: "周旭阳" },
    { id: 11, username: "zhouxuyang8", password: "Aa123", name: "周旭阳" },
    { id: 12, username: "zhouxuyang9", password: "Aa123", name: "周旭阳" }
  ]

  constructor() { }

  ngOnInit() {
    
  }

}
