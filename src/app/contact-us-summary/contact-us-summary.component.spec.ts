import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactUsSummaryComponent } from './contact-us-summary.component';

describe('ContactUsSummaryComponent', () => {
  let component: ContactUsSummaryComponent;
  let fixture: ComponentFixture<ContactUsSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactUsSummaryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContactUsSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
