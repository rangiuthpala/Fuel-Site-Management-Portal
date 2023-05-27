import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlendAddEditComponent } from './blend-add-edit.component';

describe('BlendAddEditComponent', () => {
  let component: BlendAddEditComponent;
  let fixture: ComponentFixture<BlendAddEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlendAddEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlendAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
