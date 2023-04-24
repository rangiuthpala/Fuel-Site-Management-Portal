import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopulationGradeComponent } from './population-grade.component';

describe('PopulationGradeComponent', () => {
  let component: PopulationGradeComponent;
  let fixture: ComponentFixture<PopulationGradeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopulationGradeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopulationGradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
