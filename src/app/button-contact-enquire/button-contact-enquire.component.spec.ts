import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonContactEnquireComponent } from './button-contact-enquire.component';

describe('ButtonContactEnquireComponent', () => {
  let component: ButtonContactEnquireComponent;
  let fixture: ComponentFixture<ButtonContactEnquireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonContactEnquireComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonContactEnquireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
