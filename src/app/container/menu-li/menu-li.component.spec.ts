import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuLiComponent } from './menu-li.component';

describe('MenuLiComponent', () => {
  let component: MenuLiComponent;
  let fixture: ComponentFixture<MenuLiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuLiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuLiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
