import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoseAddEditComponent } from './hose-add-edit.component';

describe('HoseAddEditComponent', () => {
  let component: HoseAddEditComponent;
  let fixture: ComponentFixture<HoseAddEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HoseAddEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HoseAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
