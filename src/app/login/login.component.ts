import { of } from 'rxjs/observable/of';
import { Userinfos } from './../mock-userinfo';
import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { FormGroup, FormBuilder, Validators, AbstractControl, FormControl } from '@angular/forms';
import { Userinfo } from '../userinfo';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  myForm: FormGroup;
  //isLogin = false;

  errorMessage ="";
  constructor(private router: Router, fb: FormBuilder) {
    this.myForm = fb.group({
      'username': [''],
      'password': ['']
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
      this.router.navigate(["/home"],{queryParams:{"name":userInfo.name}});
    } else{
      this.errorMessage = "账号或用户名错误!!";
    }
  
  }
}
