import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RecoverpasswordComponent } from './recoverpassword.component';

describe('RecoverpasswordComponent', () => {
  let component: RecoverpasswordComponent;
  let fixture: ComponentFixture<RecoverpasswordComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RecoverpasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecoverpasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
