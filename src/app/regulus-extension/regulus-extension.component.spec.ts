import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegulusExtensionComponent } from './regulus-extension.component';

describe('RegulusExtensionComponent', () => {
  let component: RegulusExtensionComponent;
  let fixture: ComponentFixture<RegulusExtensionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegulusExtensionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegulusExtensionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
