import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-form-reactive',
  templateUrl: './from-reactive.component.html',
  styleUrls: ['./from-reactive.component.css']
})
export class FromReactiveComponent implements OnInit {

  myForm:FormGroup;

  name:AbstractControl;
  age:AbstractControl;
  address:AbstractControl;

  constructor(fb:FormBuilder) {
     this.myForm=fb.group({
       'name':['name',Validators.required],
       'age':['age',Validators.required],
       'address':['address',Validators.required],       
     });
     this.name=this.myForm.controls['name'];
     this.age=this.myForm.controls['age'];
     this.address=this.myForm.controls['address'];
  }

  ngOnInit() {
  }

}
