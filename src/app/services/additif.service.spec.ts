import { TestBed } from '@angular/core/testing';

import { AdditifService } from './additif.service';

describe('AdditifService', () => {
  let service: AdditifService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdditifService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
