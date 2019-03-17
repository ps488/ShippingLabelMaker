import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SenderInfoComponent } from './sender-info.component';

describe('SenderInfoComponent', () => {
  let component: SenderInfoComponent;
  let fixture: ComponentFixture<SenderInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SenderInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SenderInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
