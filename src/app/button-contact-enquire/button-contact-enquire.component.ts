import { Component } from '@angular/core';
import {ButtonSharedComponent} from "../components/buttons/button-shared/button-shared.component";

@Component({
  selector: 'app-button-contact-enquire',
  imports: [ButtonSharedComponent],
  templateUrl: './button-contact-enquire.component.html',
  standalone: true,
  styleUrl: './button-contact-enquire.component.scss'
})
export class ButtonContactEnquireComponent {
}

