import { Component } from '@angular/core';
import { RouterLink} from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {LogoComponent} from "../logo/logo.component";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatMenuModule} from "@angular/material/menu";
import {ButtonSharedComponent} from "../components/buttons/button-shared/button-shared.component";
import {MatDivider} from "@angular/material/divider";
import {LogoAdvancedComponent} from "../logo-advanced/logo-advanced.component";

@Component({
  selector: 'app-navbar',
    imports: [
        MatButtonModule, MatIconModule,
        RouterLink, LogoComponent, MatToolbarModule, MatMenuModule, ButtonSharedComponent, MatDivider,
        NavbarComponent, LogoAdvancedComponent
    ],
  templateUrl: './navbar.component.html',
  standalone: true,
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent {

}
