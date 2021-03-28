import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Register1Component } from './register1.component';

describe('Register1Component', () => {
  let component: Register1Component;
  let fixture: ComponentFixture<Register1Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ Register1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Register1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
