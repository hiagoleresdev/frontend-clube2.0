import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarClubeComponent } from './navbar-clube.component';

describe('NavbarClubeComponent', () => {
  let component: NavbarClubeComponent;
  let fixture: ComponentFixture<NavbarClubeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarClubeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarClubeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
