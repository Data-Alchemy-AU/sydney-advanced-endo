import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProfileService} from "../profile.service";
import {Profile} from "../profile";
import {CommonModule} from "@angular/common";

import {MatGridListModule} from "@angular/material/grid-list";
import {
  MatCardModule,
} from "@angular/material/card";
import {ButtonContactEnquireComponent} from "../button-contact-enquire/button-contact-enquire.component";
import {MatButtonModule} from "@angular/material/button";
import {ButtonSharedComponent} from "../components/buttons/button-shared/button-shared.component";

@Component({
  selector: 'app-our-team-detail',
  imports: [CommonModule, MatGridListModule, MatCardModule, ButtonContactEnquireComponent, MatButtonModule, ButtonSharedComponent],
  templateUrl: './our-team-detail.component.html',
  standalone: true,
  styleUrl: './our-team-detail.component.scss'
})

export class OurTeamDetailComponent implements OnInit {
  profile?: Profile;

  constructor(
    private route: ActivatedRoute,
    private profileService: ProfileService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.profileService.getProfileById(id).subscribe((profile) => {
        if (profile) {
          this.profile = profile;
        } else {
          console.error(`Profile with ID ${id} not found`);
        }
      });
    }
  }
}
