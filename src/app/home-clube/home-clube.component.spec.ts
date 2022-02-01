import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeClubeComponent } from './home-clube.component';

describe('HomeClubeComponent', () => {
  let component: HomeClubeComponent;
  let fixture: ComponentFixture<HomeClubeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeClubeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeClubeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
