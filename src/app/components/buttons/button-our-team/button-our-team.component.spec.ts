import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonOurTeamComponent } from './button-our-team.component';

describe('ButtonOurTeamComponent', () => {
  let component: ButtonOurTeamComponent;
  let fixture: ComponentFixture<ButtonOurTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonOurTeamComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonOurTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
