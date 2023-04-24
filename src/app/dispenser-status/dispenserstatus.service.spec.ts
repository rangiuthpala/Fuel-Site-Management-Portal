import { TestBed } from '@angular/core/testing';

import { DispenserstatusService } from './dispenserstatus.service';

describe('DispenserstatusService', () => {
  let service: DispenserstatusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DispenserstatusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
