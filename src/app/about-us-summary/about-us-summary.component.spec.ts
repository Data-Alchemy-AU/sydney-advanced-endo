import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsSummaryComponent } from './about-us-summary.component';

describe('AboutUsSummaryComponent', () => {
  let component: AboutUsSummaryComponent;
  let fixture: ComponentFixture<AboutUsSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutUsSummaryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AboutUsSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
