import { TestBed } from '@angular/core/testing';

import { TravelRequestDetailsService } from './travel-request-details.service';

describe('TravelRequestDetailsService', () => {
  let service: TravelRequestDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TravelRequestDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
