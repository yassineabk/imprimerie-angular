import { TestBed } from '@angular/core/testing';

import { FlyerService } from 'angular10-springboot-client/src/app/flyer.service';

describe('FlyerService', () => {
  let service: FlyerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlyerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
