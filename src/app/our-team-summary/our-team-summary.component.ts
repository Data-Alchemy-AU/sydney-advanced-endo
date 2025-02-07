import { Component } from '@angular/core';
import {ButtonSharedComponent} from "../components/buttons/button-shared/button-shared.component";

@Component({
  selector: 'app-our-team-summary',
  imports: [
    ButtonSharedComponent
  ],
  templateUrl: './our-team-summary.component.html',
  standalone: true,
  styleUrl: './our-team-summary.component.scss'
})
export class OurTeamSummaryComponent {

}
