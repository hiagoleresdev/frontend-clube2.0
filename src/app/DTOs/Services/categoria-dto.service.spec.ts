import { TestBed } from '@angular/core/testing';

import { CategoriaDTOService } from './categoria-dto.service';

describe('CategoriaDTOService', () => {
  let service: CategoriaDTOService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoriaDTOService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
