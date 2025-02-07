import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonContactUsComponent } from './button-contact-us.component';

describe('ButtonContactUsComponent', () => {
  let component: ButtonContactUsComponent;
  let fixture: ComponentFixture<ButtonContactUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonContactUsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonContactUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
