import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';

@Component({
  selector: 'app-user-from',
  templateUrl: './user-from.component.html',
  styleUrls: ['./user-from.component.css']
})
export class UserFromComponent implements OnInit {

  myForm: FormGroup;
  username:AbstractControl;
  password:AbstractControl;
  name:AbstractControl;
  modalRef: BsModalRef;
  constructor(private fb:FormBuilder,private modalService: BsModalService) { 
    this.myForm = this.fb.group({
      'username': ['', Validators.required,Validators.minLength(6)],
      'password': ['', Validators.required],
      'name': ['', Validators.required]
    })
    this.username=this.myForm.controls["username"];
    this.password=this.myForm.controls["password"];
    this.name=this.myForm.controls["name"];
  }

  ngOnInit() {
    //this.modalRef = this.modalService.show(template);
  }

}
