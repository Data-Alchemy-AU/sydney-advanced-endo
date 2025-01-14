import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import { RouterOutlet, RouterLink, RouterLinkActive} from '@angular/router';
import {LogoComponent} from "../logo/logo.component";
import {MatAnchor, MatButton} from "@angular/material/button";
import {MatToolbar} from "@angular/material/toolbar";
import {MatSidenavContainer} from "@angular/material/sidenav";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    NgOptimizedImage, RouterOutlet, RouterLink, RouterLinkActive, LogoComponent, MatAnchor, MatButton, MatToolbar, MatSidenavContainer
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
}
