import { Component } from '@angular/core';
import {MapComponent} from "../map/map.component";
import {ButtonSharedComponent} from "../components/buttons/button-shared/button-shared.component";
import {MatDivider} from "@angular/material/divider";
import {OurTeamSummaryComponent} from "../our-team-summary/our-team-summary.component";
@Component({
    selector: 'app-contact-us',
    imports: [
        MapComponent,
        ButtonSharedComponent,
        MatDivider,
        OurTeamSummaryComponent
    ],
    templateUrl: './contact-us.component.html',
    styleUrl: './contact-us.component.scss'
})
export class ContactUsComponent {
}
