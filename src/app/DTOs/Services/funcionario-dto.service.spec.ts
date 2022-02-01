import { TestBed } from '@angular/core/testing';

import { FuncionarioDTOService } from './funcionario-dto.service';

describe('FuncionarioDTOService', () => {
  let service: FuncionarioDTOService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FuncionarioDTOService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
