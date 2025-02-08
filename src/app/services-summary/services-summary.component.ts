import { Component } from '@angular/core';
import {ButtonSharedComponent} from "../components/buttons/button-shared/button-shared.component";
import {MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardTitle} from "@angular/material/card";

@Component({
    selector: 'app-services-summary',
    imports: [
        ButtonSharedComponent,
        MatCard,
        MatCardActions,
        MatCardContent,
        MatCardHeader,
        MatCardTitle
    ],
    templateUrl: './services-summary.component.html',
    styleUrl: './services-summary.component.scss'
})
export class ServicesSummaryComponent {

}
