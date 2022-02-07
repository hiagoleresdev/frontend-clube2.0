import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsCadastroDependenteComponent } from './forms-cadastro-dependente.component';

describe('FormsCadastroDependenteComponent', () => {
  let component: FormsCadastroDependenteComponent;
  let fixture: ComponentFixture<FormsCadastroDependenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormsCadastroDependenteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsCadastroDependenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
