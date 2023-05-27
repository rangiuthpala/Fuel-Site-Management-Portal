import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoopAddEditComponent } from './loop-add-edit.component';

describe('LoopAddEditComponent', () => {
  let component: LoopAddEditComponent;
  let fixture: ComponentFixture<LoopAddEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoopAddEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoopAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
