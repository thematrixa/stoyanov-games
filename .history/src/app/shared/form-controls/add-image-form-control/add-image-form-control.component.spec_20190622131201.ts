import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddImageFormControlComponent } from './add-image-form-control.component';

describe('AddImageFormControlComponent', () => {
  let component: AddImageFormControlComponent;
  let fixture: ComponentFixture<AddImageFormControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddImageFormControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddImageFormControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
