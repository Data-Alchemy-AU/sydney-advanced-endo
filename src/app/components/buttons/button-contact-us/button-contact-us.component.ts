import { Component } from '@angular/core';
import {MatButtonModule} from "@angular/material/button";
import {RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-button-contact-us',
  imports: [MatButtonModule, RouterLink, RouterLinkActive],
  templateUrl: './button-contact-us.component.html',
  styleUrl: './button-contact-us.component.scss'
})

export class ButtonContactUsComponent {

}
