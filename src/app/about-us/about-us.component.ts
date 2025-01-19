import { Component , OnInit} from '@angular/core';
import {ClinicService} from "../clinic.service";
import {MatButton} from '@angular/material/button'
@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [
    MatButton
  ],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss'
})
export class AboutUsComponent implements OnInit {
  clinicName: string = "";

  constructor(private clinicService: ClinicService) { }

  ngOnInit(){
    this.clinicName = this.clinicService.getClinicName();
  }
}
