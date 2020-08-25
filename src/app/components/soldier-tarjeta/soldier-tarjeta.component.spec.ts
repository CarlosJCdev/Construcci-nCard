import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoldierTarjetaComponent } from './soldier-tarjeta.component';

describe('SoldierTarjetaComponent', () => {
  let component: SoldierTarjetaComponent;
  let fixture: ComponentFixture<SoldierTarjetaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoldierTarjetaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoldierTarjetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
