import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesSummaryComponent } from './services-summary.component';

describe('ServicesSummaryComponent', () => {
  let component: ServicesSummaryComponent;
  let fixture: ComponentFixture<ServicesSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicesSummaryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ServicesSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
