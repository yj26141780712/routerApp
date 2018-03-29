import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DerectiveListComponent } from './derective-list.component';

describe('DerectiveListComponent', () => {
  let component: DerectiveListComponent;
  let fixture: ComponentFixture<DerectiveListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DerectiveListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DerectiveListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
