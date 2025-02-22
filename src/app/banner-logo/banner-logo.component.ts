import {Component, Input} from '@angular/core';
import {MatCardModule} from "@angular/material/card";

@Component({
  selector: 'app-banner-logo',
  imports: [
    MatCardModule
  ],
  templateUrl: './banner-logo.component.html',
  styleUrl: './banner-logo.component.scss'
})
export class BannerLogoComponent {
  @Input() imageSrc: string = '';
}
