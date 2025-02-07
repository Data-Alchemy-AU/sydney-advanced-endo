import { Component } from '@angular/core';
import {MatButtonModule} from "@angular/material/button";
import {RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-button-enquire',
    imports: [
        MatButtonModule,
        RouterLink,
        RouterLinkActive
    ],
  templateUrl: './button-enquire.component.html',
  styleUrl: './button-enquire.component.scss'
})
export class ButtonEnquireComponent {

}
