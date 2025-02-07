import { Component } from '@angular/core';
import {ButtonSharedComponent} from "../components/buttons/button-shared/button-shared.component";

@Component({
    selector: 'app-services-summary',
  imports: [
    ButtonSharedComponent
  ],
    templateUrl: './services-summary.component.html',
    styleUrl: './services-summary.component.scss'
})
export class ServicesSummaryComponent {

}
