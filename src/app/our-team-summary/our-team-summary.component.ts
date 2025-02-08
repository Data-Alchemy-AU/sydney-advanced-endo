import { Component } from '@angular/core';
import {ButtonSharedComponent} from "../components/buttons/button-shared/button-shared.component";
import {ButtonContactEnquireComponent} from "../button-contact-enquire/button-contact-enquire.component";
import {MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardTitle} from "@angular/material/card";

@Component({
  selector: 'app-our-team-summary',
    imports: [
        ButtonSharedComponent,
        MatCard,
        MatCardActions,
        MatCardContent,
        MatCardHeader,
        MatCardTitle
    ],
  templateUrl: './our-team-summary.component.html',
  standalone: true,
  styleUrl: './our-team-summary.component.scss'
})
export class OurTeamSummaryComponent {

}
