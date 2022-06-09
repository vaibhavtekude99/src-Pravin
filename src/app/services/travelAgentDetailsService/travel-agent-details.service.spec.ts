import { TestBed } from '@angular/core/testing';

import { TravelAgentDetailsService } from './travel-agent-details.service';

describe('TravelAgentDetailsService', () => {
  let service: TravelAgentDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TravelAgentDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
