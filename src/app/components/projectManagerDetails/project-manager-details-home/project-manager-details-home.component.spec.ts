import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectManagerDetailsHomeComponent } from './project-manager-details-home.component';

describe('ProjectManagerDetailsHomeComponent', () => {
  let component: ProjectManagerDetailsHomeComponent;
  let fixture: ComponentFixture<ProjectManagerDetailsHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectManagerDetailsHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectManagerDetailsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
