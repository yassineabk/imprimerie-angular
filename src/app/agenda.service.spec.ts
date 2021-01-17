import { TestBed } from '@angular/core/testing';

import { AgendaService } from 'angular10-springboot-client/src/app/agenda.service';

describe('AgendaService', () => {
  let service: AgendaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgendaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
