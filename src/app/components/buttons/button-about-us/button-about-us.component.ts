import { Component } from '@angular/core';
import {MatButtonModule} from "@angular/material/button";
import {RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-button-about-us',
  imports: [
    MatButtonModule,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './button-about-us.component.html',
  styleUrl: './button-about-us.component.scss'
})
export class ButtonAboutUsComponent {

}
