import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import { RouterOutlet, RouterLink, RouterLinkActive} from '@angular/router';
import {LogoComponent} from "../logo/logo.component";
import {MatAnchor, MatButton} from "@angular/material/button";
import {MatToolbar} from "@angular/material/toolbar";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    NgOptimizedImage, RouterOutlet, RouterLink, RouterLinkActive, LogoComponent, MatAnchor, MatButton, MatToolbar
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
