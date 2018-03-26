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
  public delsubject = new Subject();
  public addsubject = new Subject<Userinfo>();
  public editsubject = new Subject<Userinfo>();
  public selectsubject = new Subject<Userinfo>();

  constructor() { }

  getUserinfos():Observable<Userinfo[]>{ //currentPage:number,itemsPerPage:number
    //console.log(currentPage,itemsPerPage);
    //let userinfos:Userinfo[]=Userinfos.slice(currentPage*itemsPerPage,currentPage*itemsPerPage+itemsPerPage);
    return of(Userinfos)
  }

  serch(params: string): Observable<Userinfo[]> { //,currentPage:number,itemsPerPage:number
    params =params||"";
    let arrs:Userinfo[]=[];
    Userinfos.forEach((obj,i)=>{
      if(obj.username.indexOf(params)>-1||obj.name.indexOf(params)>-1 || params.trim().length==0){
         //console.log(obj.username.indexOf(params));
         arrs.push(obj);
      }       
    })
    //let userinfos:Userinfo[]=arrs.slice(currentPage*itemsPerPage,currentPage*itemsPerPage+itemsPerPage);
    return  of(arrs)
  }

  delete(userinfo:Userinfo){
    // return  Userinfos = Userinfos.filter(h=>h!=userinfo);
  }
   
  edit(userinfo:Userinfo){

  }

  getcurrentPage(arrs:any[],currentPage:number,itemsPerPage:number):any[]{
    //console.log(currentPage,itemsPerPage);
    //console.log(arrs);  
    let start:number = (currentPage-1)*itemsPerPage;
    let end:number =start+itemsPerPage;
    console.log(start,end);
    arrs = arrs.slice(start,end);
    return arrs;
  }
  
}
