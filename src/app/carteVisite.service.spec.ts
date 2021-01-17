import { TestBed } from '@angular/core/testing';

import { CarteVisiteService } from 'angular10-springboot-client/src/app/carteVisite.service';

describe('CarteVisiteService', () => {
  let service: CarteVisiteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarteVisiteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
