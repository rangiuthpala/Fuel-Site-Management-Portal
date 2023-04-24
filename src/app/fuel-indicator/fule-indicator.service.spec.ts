import { TestBed } from '@angular/core/testing';

import { FuleIndicatorService } from './fule-indicator.service';

describe('FuleIndicatorService', () => {
  let service: FuleIndicatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FuleIndicatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
