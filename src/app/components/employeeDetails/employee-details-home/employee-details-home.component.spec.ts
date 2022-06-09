import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeDetailsHomeComponent } from './employee-details-home.component';

describe('EmployeeDetailsHomeComponent', () => {
  let component: EmployeeDetailsHomeComponent;
  let fixture: ComponentFixture<EmployeeDetailsHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeDetailsHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeDetailsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
