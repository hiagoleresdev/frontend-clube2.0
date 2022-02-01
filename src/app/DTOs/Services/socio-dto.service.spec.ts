import { TestBed } from '@angular/core/testing';

import { SocioDTOService } from './socio-dto.service';

describe('SocioDTOService', () => {
  let service: SocioDTOService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SocioDTOService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
