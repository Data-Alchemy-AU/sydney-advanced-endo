import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonEnquireComponent } from './button-enquire.component';

describe('ButtonEnquireComponent', () => {
  let component: ButtonEnquireComponent;
  let fixture: ComponentFixture<ButtonEnquireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonEnquireComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonEnquireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
