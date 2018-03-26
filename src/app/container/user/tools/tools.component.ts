import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { UserinfoService } from './../../../userinfo.service';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { Userinfo } from '../../../userinfo';
import { BsModalService, BsModalRef } from "ngx-bootstrap";


@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.css']
})
export class ToolsComponent implements OnInit {

  myForm: FormGroup;
  private typeSubmit: string;
  modalRef: BsModalRef;
  private selectedUserinfo: Userinfo;

  // userinfo:Userinfo;

  constructor(private userinfoService: UserinfoService, private fb: FormBuilder, private modalService: BsModalService) {
    this.myForm = this.fb.group({
      'username': ['', Validators.minLength(6)],
      'password': ['', Validators.required],
      'name': ['', Validators.required]
    })
    
  }
 
  clearform():void{
    for (const key in this.myForm.value) {
      this.myForm.controls[key].setValue("");
    }
  }

  ngOnInit() {
    this.userinfoService.selectsubject.subscribe(
      userinfo => this.selectedUserinfo = userinfo
    )
    this.modalService.onHidden.subscribe(() => {
       this.clearform();
    });
  }

  add(template: TemplateRef<any>): void { //模板调用
    //let userinfo=new Userinfo(5,"admin","admin","admin");
    //this.userinfoService.addsubject.next(userinfo);
    this.typeSubmit = "add";
    this.modalRef = this.modalService.show(template);

  }

  edit(template: TemplateRef<any>): void {
    console.log(this.selectedUserinfo);
    if (this.selectedUserinfo) {
      this.typeSubmit = "edit";
      for (const key in this.myForm.value) {
        this.myForm.controls[key].setValue(this.selectedUserinfo[key]||"");
      }
      //this.userinfo = this.selectedUserinfo;
      this.modalRef = this.modalService.show(template);
    }
  }


  del(): void {
    this.userinfoService.delsubject.next();
  }

  onSubmit(): void {
    if (this.myForm.valid) {
      if (this.typeSubmit == "add") {
        let username = this.myForm.value.username;
        let password = this.myForm.value.password;
        let name = this.myForm.value.name;
        let userinfo = new Userinfo(5, username, password, name);
        this.userinfoService.addsubject.next(userinfo);
      } else{
       // this.selectedUserinfo.username="123"; 
        Object.assign(this.selectedUserinfo,this.myForm.value);
        console.log(this.selectedUserinfo);       
        this.userinfoService.editsubject.next(this.selectedUserinfo);
      }
      this.modalRef.hide();
    } else {
      console.log("验证失败！");
    }
  }

  close(): void {
    console.log("点击关闭！");
    this.modalRef.hide();
  }

}
