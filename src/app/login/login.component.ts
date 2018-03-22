
import { of } from 'rxjs/observable/of';
import { Userinfos } from './../mock-userinfo';
import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { FormGroup, FormBuilder, Validators, AbstractControl, FormControl } from '@angular/forms';
import { Userinfo } from '../userinfo';
import { CookieService } from 'ngx-cookie';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  myForm: FormGroup;
  //isLogin = false;

  errorMessage ="";
  constructor(private router: Router, fb: FormBuilder,private _cookieService:CookieService) {
    let _cookie:any = this._cookieService.getObject("routerApp");
    console.log(_cookie);
    let username = _cookie&&_cookie.username||"";
    let password = _cookie&&_cookie.password||"";
    this.myForm = fb.group({
      'username': [username],
      'password': [password]
    })
  }

  ngOnInit() {
    
  }

  onSubmit(value:any): void {
    //this.router.navigateByUrl("home"); 

    // let navigationExtras: NavigationExtras = {
    //   queryParamsHandling: 'preserve',
    //   preserveFragment: true
    // };
    //console.log(this.cookieService);
    let userInfo:Userinfo;
    for (const obj of Userinfos) {
      if(obj.username==value.username&&obj.password==value.password){         
        // console.log(obj.username);
        // console.log(obj.password);
        userInfo = obj;
        break;
     }
    }
    //this.router.navigate(["/home",]);
    if(userInfo&&userInfo.username){
      this.errorMessage = "";
      this._cookieService.putObject("routerApp",userInfo);
      this.router.navigate(["/home"],{queryParams:{"name":userInfo.name}});
    } else{
      this.errorMessage = "账号或用户名错误!!";
    }
  
  }
}
