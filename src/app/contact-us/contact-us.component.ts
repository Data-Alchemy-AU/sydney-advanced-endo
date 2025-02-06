import { Component } from '@angular/core';
// import {MapComponent} from "../map/map.component";
import {MapComponent} from "../map/map.component";
import {MatButton} from "@angular/material/button";
@Component({
    selector: 'app-contact-us',
  imports: [
    MapComponent,
    MatButton
  ],
    templateUrl: './contact-us.component.html',
    styleUrl: './contact-us.component.scss'
})
export class ContactUsComponent {
}
