import { TestBed } from '@angular/core/testing';

import { MensalidadeDTOService } from './mensalidade-dto.service';

describe('MensalidadeDTOService', () => {
  let service: MensalidadeDTOService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MensalidadeDTOService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
