import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftTreeTestComponent } from './left-tree-test.component';

describe('LeftTreeTestComponent', () => {
  let component: LeftTreeTestComponent;
  let fixture: ComponentFixture<LeftTreeTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeftTreeTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftTreeTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
