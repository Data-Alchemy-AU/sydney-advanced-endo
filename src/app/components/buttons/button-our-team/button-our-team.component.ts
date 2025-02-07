import { Component } from '@angular/core';
import {MatButtonModule} from "@angular/material/button";
import {RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-button-our-team',
  imports: [
    MatButtonModule,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './button-our-team.component.html',
  styleUrl: './button-our-team.component.scss'
})
export class ButtonOurTeamComponent {

}
