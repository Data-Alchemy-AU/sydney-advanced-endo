import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive} from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {LogoComponent} from "../logo/logo.component";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatMenuModule} from "@angular/material/menu";

@Component({
  selector: 'app-navbar',
  imports: [
    MatButtonModule, MatIconModule,
    RouterLink, RouterLinkActive, LogoComponent, MatToolbarModule, MatMenuModule
  ],
  templateUrl: './navbar.component.html',
  standalone: true,
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent {

}
