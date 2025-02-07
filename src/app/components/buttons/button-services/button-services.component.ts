import { Component } from '@angular/core';
import {MatButtonModule} from "@angular/material/button";
import {RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-button-services',
  imports: [
    MatButtonModule,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './button-services.component.html',
  styleUrl: './button-services.component.scss'
})
export class ButtonServicesComponent {

}
