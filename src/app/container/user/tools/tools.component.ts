import { UserFromComponent } from './../user-from/user-from.component';
import { FormBuilder, FormGroup, Validators, FormControl, AbstractControl } from '@angular/forms';
import { UserinfoService } from './../../../userinfo.service';
import { Component, OnInit, TemplateRef, ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { Userinfo } from '../../../userinfo';
import { BsModalService, BsModalRef } from "ngx-bootstrap";
import { forbiddenNameValidator } from '../../../tool/directive/forbidden-validator.directive';


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

  private username:AbstractControl
  private password:AbstractControl;
  private name:AbstractControl;
  // userinfo:Userinfo;
  @ViewChild("userAdd",{read:ViewContainerRef}) userAdd:ViewContainerRef
  constructor(private userinfoService: UserinfoService, private fb: FormBuilder
    , private modalService: BsModalService,private cfr: ComponentFactoryResolver) {
    this.myForm = this.fb.group({
      'username': ['', [Validators.minLength(8),Validators.required]],
      'password': ['', [forbiddenNameValidator(/(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{5,16}/)]], //数字字母混合
      'name': ['', Validators.required]
    })
    this.username=this.myForm.controls["username"];
    this.password=this.myForm.controls["password"];
    this.name = this.myForm.controls["name"];
  }
 
  clearform():void{
    // for (const key in this.myForm.value) {
    //   this.myForm.controls[key].setValue("");
    // }
    this.myForm.reset();
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
   // let com = this.cfr.resolveComponentFactory(UserFromComponent);
    //this.userAdd.createComponent(com);
    this.modalRef = this.modalService.show(template);
  }
  /**
   * 动态添加组件
   */
  addDynamic(){
    let com = this.cfr.resolveComponentFactory(UserFromComponent);
    this.userAdd.createComponent(com);
  }

  edit(template: TemplateRef<any>): void {
    console.log(this.selectedUserinfo);
    if (this.selectedUserinfo) {
      this.typeSubmit = "edit";
      this.myForm.reset(this.selectedUserinfo);
      // for (const key in this.myForm.value) {
      //   this.myForm.controls[key].setValue(this.selectedUserinfo[key]||"");
      // }
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
