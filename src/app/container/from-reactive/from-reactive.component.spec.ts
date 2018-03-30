import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FromReactiveComponent } from './from-reactive.component';

describe('FromReactiveComponent', () => {
  let component: FromReactiveComponent;
  let fixture: ComponentFixture<FromReactiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FromReactiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FromReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
