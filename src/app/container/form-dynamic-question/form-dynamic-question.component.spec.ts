import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDynamicQuestionComponent } from './form-dynamic-question.component';

describe('FormDynamicQuestionComponent', () => {
  let component: FormDynamicQuestionComponent;
  let fixture: ComponentFixture<FormDynamicQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormDynamicQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormDynamicQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
