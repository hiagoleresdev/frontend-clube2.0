import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormMensalidadeComponent } from './form-mensalidade.component';

describe('FormMensalidadeComponent', () => {
  let component: FormMensalidadeComponent;
  let fixture: ComponentFixture<FormMensalidadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormMensalidadeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormMensalidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
