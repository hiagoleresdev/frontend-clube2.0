import { TestBed } from '@angular/core/testing';

import { DependenteDTOService } from './dependente-dto.service';


describe ('DependenteDTOService', () => {
  let service: DependenteDTOService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DependenteDTOService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

});
