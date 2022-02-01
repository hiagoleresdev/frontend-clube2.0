import { TestBed } from '@angular/core/testing';

import { PessoaDTOService } from './pessoa-dto.service';

describe('PessoaDTOService', () => {
  let service: PessoaDTOService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PessoaDTOService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
