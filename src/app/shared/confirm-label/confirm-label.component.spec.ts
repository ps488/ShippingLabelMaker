import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmLabelComponent } from './confirm-label.component';

describe('ConfirmLabelComponent', () => {
  let component: ConfirmLabelComponent;
  let fixture: ComponentFixture<ConfirmLabelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmLabelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
