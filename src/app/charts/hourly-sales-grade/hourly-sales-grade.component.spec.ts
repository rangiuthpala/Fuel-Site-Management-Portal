import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HourlySalesGradeComponent } from './hourly-sales-grade.component';

describe('HourlySalesGradeComponent', () => {
  let component: HourlySalesGradeComponent;
  let fixture: ComponentFixture<HourlySalesGradeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HourlySalesGradeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HourlySalesGradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
