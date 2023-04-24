import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuelIndicatorComponent } from './fuel-indicator.component';

describe('FuelIndicatorComponent', () => {
  let component: FuelIndicatorComponent;
  let fixture: ComponentFixture<FuelIndicatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuelIndicatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FuelIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
