import {Component, Input} from '@angular/core';
import {RouterLink, RouterOutlet} from "@angular/router";
import {Profile} from '../profile'
import {CommonModule} from "@angular/common";
import {MatCardModule} from "@angular/material/card";

@Component({
  selector: 'app-profile-card',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet, MatCardModule],
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.scss']
})
export class ProfileCardComponent {
  @Input() profile!: Profile;
}
