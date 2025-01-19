import { Component } from '@angular/core';
import {MatButton} from "@angular/material/button";
import {ClinicService} from "../clinic.service";

@Component({
  selector: 'app-about-us-summary',
  standalone: true,
    imports: [
        MatButton
    ],
  templateUrl: './about-us-summary.component.html',
  styleUrl: './about-us-summary.component.scss'
})
export class AboutUsSummaryComponent {
  clinicName: string = "";
  constructor(private clinicService: ClinicService) { }

  ngOnInit(){
    this.clinicName = this.clinicService.getClinicName();
  }
}
