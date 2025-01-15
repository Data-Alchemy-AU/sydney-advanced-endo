import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive} from '@angular/router';
import {NgOptimizedImage} from "@angular/common";
import {LogoComponent} from "../logo/logo.component";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterOutlet, RouterLink, RouterLinkActive, NgOptimizedImage, LogoComponent
  ],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent {
}
