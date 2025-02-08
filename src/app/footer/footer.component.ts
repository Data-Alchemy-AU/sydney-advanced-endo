import { Component } from '@angular/core';
import { RouterLink} from '@angular/router';
import {LogoComponent} from "../logo/logo.component";
import {MatAnchor} from "@angular/material/button";
import {MatToolbar} from "@angular/material/toolbar";
import {MatDivider} from "@angular/material/divider";

@Component({
  selector: 'app-footer',
    imports: [
        RouterLink, LogoComponent, MatAnchor, MatToolbar, MatDivider
    ],
  templateUrl: './footer.component.html',
  standalone: true,
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
}
