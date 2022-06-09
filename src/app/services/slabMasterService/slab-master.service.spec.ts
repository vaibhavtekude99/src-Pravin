import { TestBed } from '@angular/core/testing';

import { SlabMasterService } from './slab-master.service';

describe('SlabMasterService', () => {
  let service: SlabMasterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SlabMasterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
