import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoAdvancedComponent } from './logo-advanced.component';

describe('LogoAdvancedComponent', () => {
  let component: LogoAdvancedComponent;
  let fixture: ComponentFixture<LogoAdvancedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogoAdvancedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogoAdvancedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
