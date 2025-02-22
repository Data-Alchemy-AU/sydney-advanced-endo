import { Component } from '@angular/core';
import {MatCard} from "@angular/material/card";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-banner-contact',
  imports: [
    MatCard,
    MatIcon
  ],
  templateUrl: './banner-contact.component.html',
  styleUrl: './banner-contact.component.scss'
})
export class BannerContactComponent {

}
