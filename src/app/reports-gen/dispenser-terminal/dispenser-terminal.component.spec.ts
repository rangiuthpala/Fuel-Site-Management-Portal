import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DispenserTerminalComponent } from './dispenser-terminal.component';

describe('DispenserTerminalComponent', () => {
  let component: DispenserTerminalComponent;
  let fixture: ComponentFixture<DispenserTerminalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DispenserTerminalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DispenserTerminalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
