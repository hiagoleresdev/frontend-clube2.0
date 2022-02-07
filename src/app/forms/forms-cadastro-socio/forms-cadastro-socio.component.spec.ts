import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsCadastroSocioComponent } from './forms-cadastro-socio.component';

describe('FormsCadastroSocioComponent', () => {
  let component: FormsCadastroSocioComponent;
  let fixture: ComponentFixture<FormsCadastroSocioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormsCadastroSocioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsCadastroSocioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
