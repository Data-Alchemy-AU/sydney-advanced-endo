import {Component, inject} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProfileService} from "../profile.service";
import {Profile} from "../profile";
import {CommonModule} from "@angular/common";


@Component({
  selector: 'app-our-team-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './our-team-detail.component.html',
  styleUrl: './our-team-detail.component.scss'
})

export class OurTeamDetailComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  profileService  = inject(ProfileService);
  profile: Profile | undefined;

  constructor() {
    const profileId = this.route.snapshot.params['id'];
    console.log(profileId);
    this.profileService.getProfileById(profileId).then(
      (profile) => {
        this.profile = profile
      });

    if (!this.profile) {
      console.error('Housing location not found!');
    }
  }
}
