import { TestBed } from '@angular/core/testing';

import { DocumentDetailsService } from './document-details.service';

describe('DocumentDetailsService', () => {
  let service: DocumentDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DocumentDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
