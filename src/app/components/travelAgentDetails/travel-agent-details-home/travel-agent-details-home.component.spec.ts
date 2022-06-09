import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelAgentDetailsHomeComponent } from './travel-agent-details-home.component';

describe('TravelAgentDetailsHomeComponent', () => {
  let component: TravelAgentDetailsHomeComponent;
  let fixture: ComponentFixture<TravelAgentDetailsHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TravelAgentDetailsHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TravelAgentDetailsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
