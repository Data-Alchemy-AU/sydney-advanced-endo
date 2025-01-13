import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import { RouterOutlet, RouterLink, RouterLinkActive} from '@angular/router';
import {LogoComponent} from "../logo/logo.component";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    NgOptimizedImage, RouterOutlet, RouterLink, RouterLinkActive, LogoComponent
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
