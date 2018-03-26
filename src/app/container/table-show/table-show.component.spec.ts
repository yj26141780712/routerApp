import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableShowComponent } from './table-show.component';

describe('TableShowComponent', () => {
  let component: TableShowComponent;
  let fixture: ComponentFixture<TableShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
