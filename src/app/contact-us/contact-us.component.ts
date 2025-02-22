import { Component } from '@angular/core';
import {ButtonSharedComponent} from "../components/buttons/button-shared/button-shared.component";
import {MatDivider} from "@angular/material/divider";
import {MatIcon} from "@angular/material/icon";
import {CommonModule} from "@angular/common";

@Component({
    selector: 'app-contact-us',
  imports: [
    ButtonSharedComponent,
    MatDivider,
    CommonModule,
    MatIcon,
  ],
    templateUrl: './contact-us.component.html',
    styleUrl: './contact-us.component.scss'
})
export class ContactUsComponent {
}
