import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurTeamSummaryComponent } from './our-team-summary.component';

describe('OurTeamSummaryComponent', () => {
  let component: OurTeamSummaryComponent;
  let fixture: ComponentFixture<OurTeamSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OurTeamSummaryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OurTeamSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
