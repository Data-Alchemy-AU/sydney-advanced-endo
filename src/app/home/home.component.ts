import { Component } from '@angular/core';
import {ImageCarouselComponent} from "../image-carousel/image-carousel.component";
import {AboutUsSummaryComponent} from "../about-us-summary/about-us-summary.component";
import {OurTeamSummaryComponent} from "../our-team-summary/our-team-summary.component";
import {ContactUsSummaryComponent} from "../contact-us-summary/contact-us-summary.component";

@Component({
  selector: 'app-home',
  imports: [
    ImageCarouselComponent,
    AboutUsSummaryComponent,
    OurTeamSummaryComponent,
    ContactUsSummaryComponent,
  ],
  templateUrl: './home.component.html',
  standalone: true,
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

}
