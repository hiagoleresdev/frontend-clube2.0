import { TestBed } from '@angular/core/testing';

import { DependenteService } from './dependente.service';

describe('DependenteService', () => {
  let service: DependenteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DependenteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
