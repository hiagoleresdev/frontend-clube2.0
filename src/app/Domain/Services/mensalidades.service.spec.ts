import { TestBed } from '@angular/core/testing';

import { MensalidadesService } from './mensalidades.service';

describe('MensalidadesService', () => {
  let service: MensalidadesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MensalidadesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
