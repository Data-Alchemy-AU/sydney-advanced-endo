import { Component } from '@angular/core';
import {ClinicService} from "../clinic.service";
import {ButtonSharedComponent} from "../components/buttons/button-shared/button-shared.component";
import {MatCardModule} from "@angular/material/card";

@Component({
  selector: 'app-about-us-summary',
  imports: [
    ButtonSharedComponent,
    MatCardModule
  ],
  templateUrl: './about-us-summary.component.html',
  standalone: true,
  styleUrl: './about-us-summary.component.scss'
})
export class AboutUsSummaryComponent {
  clinicName: string = "";
  constructor(private clinicService: ClinicService) { }

  ngOnInit(){
    this.clinicName = this.clinicService.getClinicName();
  }
}
