import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive} from '@angular/router';
import {NgOptimizedImage} from "@angular/common";
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {LogoComponent} from "../logo/logo.component";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatMenuModule} from "@angular/material/menu";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    MatButtonModule, MatIconModule,
    RouterOutlet, RouterLink, RouterLinkActive, NgOptimizedImage, LogoComponent, MatToolbarModule, MatMenuModule
  ],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent {
}
