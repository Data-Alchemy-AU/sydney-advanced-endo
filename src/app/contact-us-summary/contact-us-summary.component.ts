import { Component } from '@angular/core';
import {ButtonContactEnquireComponent} from "../button-contact-enquire/button-contact-enquire.component";
import {ButtonSharedComponent} from "../components/buttons/button-shared/button-shared.component";
import {MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardTitle} from "@angular/material/card";

@Component({
  selector: 'app-contact-us-summary',
  imports: [
    ButtonContactEnquireComponent,
    ButtonSharedComponent,
    MatCard,
    MatCardActions,
    MatCardContent,
    MatCardHeader,
    MatCardTitle,
  ],
  templateUrl: './contact-us-summary.component.html',
  standalone: true,
  styleUrl: './contact-us-summary.component.scss'
})
export class ContactUsSummaryComponent {
}
