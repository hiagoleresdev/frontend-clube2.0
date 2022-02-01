import { TestBed } from '@angular/core/testing';

import { LoginAutenticacaoService } from './login-autenticacao.service';

describe('LoginAutenticacaoService', () => {
  let service: LoginAutenticacaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginAutenticacaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
