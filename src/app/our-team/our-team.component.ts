import {Component, inject, Input} from '@angular/core';
import {ProfileCardComponent} from "../profile-card/profile-card.component";
import {Profile} from "../profile";
import {ProfileService} from "../profile.service";
import {CommonModule} from "@angular/common";

@Component({
    selector: 'app-our-team',
    imports: [
        ProfileCardComponent, CommonModule
    ],
    templateUrl: './our-team.component.html',
    styleUrl: './our-team.component.scss'
})
export class OurTeamComponent {

  profileService = inject(ProfileService);
  profileList: Profile[] = [];
  constructor() {

    this.profileService.getAllProfiles().then(
      (profileList: Profile[]) => {
        this.profileList = profileList;
      });
  }
}
