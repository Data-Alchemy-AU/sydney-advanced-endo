import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonAboutUsComponent } from './button-about-us.component';

describe('ButtonAboutUsComponent', () => {
  let component: ButtonAboutUsComponent;
  let fixture: ComponentFixture<ButtonAboutUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonAboutUsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonAboutUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
