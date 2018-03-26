import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableAnyComponent } from './table-any.component';

describe('TableAnyComponent', () => {
  let component: TableAnyComponent;
  let fixture: ComponentFixture<TableAnyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableAnyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableAnyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
