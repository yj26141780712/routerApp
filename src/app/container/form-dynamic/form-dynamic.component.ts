import { QuestionService } from './../../tool/service/question.service';
import { Component, OnInit, Input } from '@angular/core';
import { QuestionControlService } from '../../tool/service/question-control.service';
import { QuestionBase } from '../../tool/class/question-bsae';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-dynamic',
  templateUrl: './form-dynamic.component.html',
  styleUrls: ['./form-dynamic.component.css'],
  providers:[QuestionControlService,QuestionService]
})
export class FormDynamicComponent implements OnInit {

  @Input() questions: QuestionBase<any>[] = [];
  form: FormGroup;
  payLoad = '';
 
  constructor(private qcs: QuestionControlService,private qs:QuestionService) {  }
 
  ngOnInit() {
    this.questions = this.qs.getQuestions();
    console.log(this.questions);
    this.form = this.qcs.toFormGroup(this.questions);
  }
 
  onSubmit() {
    this.payLoad = JSON.stringify(this.form.value);
  }

}
