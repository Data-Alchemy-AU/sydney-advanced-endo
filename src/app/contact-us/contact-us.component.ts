import { Component } from '@angular/core';
import {MapComponent} from "../map/map.component";
import {ButtonSharedComponent} from "../components/buttons/button-shared/button-shared.component";
import {MatDivider} from "@angular/material/divider";
import {OurTeamSummaryComponent} from "../our-team-summary/our-team-summary.component";
import {MatListItem} from "@angular/material/list";
import {MatIcon} from "@angular/material/icon";
import {CommonModule} from "@angular/common";
import {RouterLink, RouterOutlet} from "@angular/router";
@Component({
    selector: 'app-contact-us',
  imports: [
    MapComponent,
    ButtonSharedComponent,
    MatDivider,
    CommonModule, RouterOutlet, RouterLink,
    MatIcon
  ],
    templateUrl: './contact-us.component.html',
    styleUrl: './contact-us.component.scss'
})
export class ContactUsComponent {
}
