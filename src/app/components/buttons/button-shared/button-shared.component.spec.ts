import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonSharedComponent } from './button-shared.component';

describe('ButtonSharedComponent', () => {
  let component: ButtonSharedComponent;
  let fixture: ComponentFixture<ButtonSharedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonSharedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
