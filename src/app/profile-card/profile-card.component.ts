import {Component, Input} from '@angular/core';
import {RouterLink} from "@angular/router";
import {Profile} from '../profile'
import {CommonModule} from "@angular/common";
import {MatCardModule} from "@angular/material/card";

@Component({
  selector: 'app-profile-card',
  imports: [CommonModule, RouterLink, MatCardModule],
  templateUrl: './profile-card.component.html',
  standalone: true,
  styleUrls: ['./profile-card.component.scss']
})
export class ProfileCardComponent {
  @Input() profile!: Profile;
}
