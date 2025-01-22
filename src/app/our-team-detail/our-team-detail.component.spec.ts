import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurTeamDetailComponent } from './our-team-detail.component';

describe('OurTeamDetailComponent', () => {
  let component: OurTeamDetailComponent;
  let fixture: ComponentFixture<OurTeamDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OurTeamDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OurTeamDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
