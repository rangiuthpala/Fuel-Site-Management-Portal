import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvarageHourlyGradeComponent } from './avarage-hourly-grade.component';

describe('AvarageHourlyGradeComponent', () => {
  let component: AvarageHourlyGradeComponent;
  let fixture: ComponentFixture<AvarageHourlyGradeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvarageHourlyGradeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvarageHourlyGradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
