import {Component, inject} from '@angular/core';
import {ActivatedRoute, RouterLink, RouterLinkActive} from "@angular/router";
import {ProfileService} from "../profile.service";
import {Profile} from "../profile";
import {CommonModule} from "@angular/common";

import {MatGridListModule} from "@angular/material/grid-list";
import {
  MatCardModule,
} from "@angular/material/card";
import {ButtonContactEnquireComponent} from "../button-contact-enquire/button-contact-enquire.component";
import {MatButtonModule} from "@angular/material/button";

@Component({
  selector: 'app-our-team-detail',
  imports: [CommonModule, MatGridListModule, MatCardModule, ButtonContactEnquireComponent, MatButtonModule, RouterLink, RouterLinkActive],
  templateUrl: './our-team-detail.component.html',
  standalone: true,
  styleUrl: './our-team-detail.component.scss'
})

export class OurTeamDetailComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  profileService  = inject(ProfileService);
  profile: Profile | undefined;

  constructor() {
    const profileId = this.route.snapshot.params['id'];
    console.log(profileId);
    this.profileService.getProfileById(profileId)
      .subscribe({
        next: (profile) => {
          this.profile = profile
      },
        error: (error) => {
          console.error('Profile not found!');
        }
    });
  }
}
