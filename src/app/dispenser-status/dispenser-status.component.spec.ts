import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DispenserStatusComponent } from './dispenser-status.component';

describe('DispenserStatusComponent', () => {
  let component: DispenserStatusComponent;
  let fixture: ComponentFixture<DispenserStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DispenserStatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DispenserStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
