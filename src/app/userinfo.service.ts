import { Userinfo } from './userinfo';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { of } from 'rxjs/observable/of';
import { Userinfos } from './mock-userinfo';
import { forEach } from '@angular/router/src/utils/collection';

@Injectable()
export class UserinfoService {
  
  //public subject : Subject<string>; 
  public subject= new Subject<string>();

  constructor() { }

  getUserinfos():Observable<Userinfo[]>{
     
    return of(Userinfos)
  }

  serch(params: string): Observable<Userinfo[]> {
    console.log("查询有效！");
    let arrs:[Userinfo];
    Userinfos.forEach((obj,i)=>{
      if(obj.username.indexOf(params)>-1||obj.name.indexOf(params) || params.trim().length==0){
         console.log(obj);
         console.log(i);
      }       
    })
    return of(arrs)
  }
}
