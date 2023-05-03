import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsGenComponent } from './reports-gen.component';

describe('ReportsGenComponent', () => {
  let component: ReportsGenComponent;
  let fixture: ComponentFixture<ReportsGenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportsGenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportsGenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
