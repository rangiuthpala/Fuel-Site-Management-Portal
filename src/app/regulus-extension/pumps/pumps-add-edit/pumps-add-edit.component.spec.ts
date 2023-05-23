import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PumpsAddEditComponent } from './pumps-add-edit.component';

describe('PumpsAddEditComponent', () => {
  let component: PumpsAddEditComponent;
  let fixture: ComponentFixture<PumpsAddEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PumpsAddEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PumpsAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
