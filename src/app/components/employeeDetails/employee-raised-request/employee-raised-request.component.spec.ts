import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeRaisedRequestComponent } from './employee-raised-request.component';

describe('EmployeeRaisedRequestComponent', () => {
  let component: EmployeeRaisedRequestComponent;
  let fixture: ComponentFixture<EmployeeRaisedRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeRaisedRequestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeRaisedRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
