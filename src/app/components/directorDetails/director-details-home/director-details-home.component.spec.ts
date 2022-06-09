import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectorDetailsHomeComponent } from './director-details-home.component';

describe('DirectorDetailsHomeComponent', () => {
  let component: DirectorDetailsHomeComponent;
  let fixture: ComponentFixture<DirectorDetailsHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectorDetailsHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectorDetailsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
