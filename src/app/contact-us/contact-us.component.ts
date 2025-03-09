import { Component } from '@angular/core';
import {ButtonSharedComponent} from "../components/buttons/button-shared/button-shared.component";
import {MatDivider} from "@angular/material/divider";
import {MatIcon} from "@angular/material/icon";
import {CommonModule} from "@angular/common";
import {BannerLogoComponent} from "../banner-logo/banner-logo.component";
import {BannerLogoStvinniesComponent} from "../banner-logo-stvinnies/banner-logo-stvinnies.component";

@Component({
    selector: 'app-contact-us',
  imports: [
    ButtonSharedComponent,
    MatDivider,
    CommonModule,
    MatIcon,
    BannerLogoComponent,
    BannerLogoStvinniesComponent,
  ],
    templateUrl: './contact-us.component.html',
    styleUrl: './contact-us.component.scss'
})
export class ContactUsComponent {
}
