import { Component } from '@angular/core';
import {MatButtonModule} from "@angular/material/button";
import {RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-button-home',
    imports: [
      MatButtonModule,
        RouterLink,
        RouterLinkActive
    ],
  templateUrl: './button-home.component.html',
  styleUrl: './button-home.component.scss'
})
export class ButtonHomeComponent {

}
