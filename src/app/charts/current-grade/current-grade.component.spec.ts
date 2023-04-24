import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentGradeComponent } from './current-grade.component';

describe('CurrentGradeComponent', () => {
  let component: CurrentGradeComponent;
  let fixture: ComponentFixture<CurrentGradeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrentGradeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrentGradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
