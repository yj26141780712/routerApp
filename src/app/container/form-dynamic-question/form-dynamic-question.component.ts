import { Component, OnInit, Input } from '@angular/core';
import { QuestionBase } from '../../tool/class/question-bsae';
import { FormGroup } from '@angular/forms';

@Component({
  selector: '[app-form-dynamic-question]',
  templateUrl: './form-dynamic-question.component.html',
  styleUrls: ['./form-dynamic-question.component.css']
})
export class FormDynamicQuestionComponent {

  @Input() question: QuestionBase<any>;
  @Input() form: FormGroup;
  get isValid() { return this.form.controls[this.question.key].valid; }

}
