import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxTabletestComponent } from './ngx-tabletest.component';

describe('NgxTabletestComponent', () => {
  let component: NgxTabletestComponent;
  let fixture: ComponentFixture<NgxTabletestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxTabletestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxTabletestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
