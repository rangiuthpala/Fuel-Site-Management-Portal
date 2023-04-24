import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentTerminalComponent } from './current-terminal.component';

describe('CurrentTerminalComponent', () => {
  let component: CurrentTerminalComponent;
  let fixture: ComponentFixture<CurrentTerminalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrentTerminalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrentTerminalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
