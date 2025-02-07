import { Component } from '@angular/core';
import {ButtonContactEnquireComponent} from "../button-contact-enquire/button-contact-enquire.component";

@Component({
  selector: 'app-contact-us-summary',
  imports: [
    ButtonContactEnquireComponent,
  ],
  templateUrl: './contact-us-summary.component.html',
  standalone: true,
  styleUrl: './contact-us-summary.component.scss'
})
export class ContactUsSummaryComponent {
}
