import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimacaoOndasComponent } from './animacao-ondas.component';

describe('AnimacaoOndasComponent', () => {
  let component: AnimacaoOndasComponent;
  let fixture: ComponentFixture<AnimacaoOndasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimacaoOndasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimacaoOndasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
