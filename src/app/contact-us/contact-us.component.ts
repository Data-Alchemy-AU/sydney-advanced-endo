import { Component } from '@angular/core';
import {MapComponent} from "../map/map.component";
import {ButtonSharedComponent} from "../components/buttons/button-shared/button-shared.component";
@Component({
    selector: 'app-contact-us',
  imports: [
    MapComponent,
    ButtonSharedComponent
  ],
    templateUrl: './contact-us.component.html',
    styleUrl: './contact-us.component.scss'
})
export class ContactUsComponent {
}
