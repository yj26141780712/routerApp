import { Injectable } from '@angular/core';
import { TextboxQuestion } from '../class/question-textbox';
import { DropdownQuestion } from '../class/question-dropdown';
import { QuestionBase } from '../class/question-bsae';

@Injectable()
export class QuestionService {

  constructor() { }

  getQuestions() {

    let questions: QuestionBase<any>[] = [

      new DropdownQuestion({
        key: 'department',
        label: '部门',
        options: [
          { key: '1', value: '企业数据' },
          { key: '2', value: '产品开发' },
          { key: '3', value: '产品管理' },
          { key: '4', value: '系统开发' }
        ],
        order: 3
      }),

      new TextboxQuestion({
        key: 'name',
        label: '姓名',
        value: '',
        required: true,
        order: 1
      }),
    
      new TextboxQuestion({
        key: 'emailAddress',
        label: '邮箱',
        type: 'email',
        order: 2
      })
    ];

    return questions.sort((a, b) => a.order - b.order); //自带排序算法
  }

}
