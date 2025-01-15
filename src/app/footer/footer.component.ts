import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive} from '@angular/router';
import {LogoComponent} from "../logo/logo.component";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    RouterOutlet, RouterLink, RouterLinkActive, LogoComponent
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
}
