import { Component , OnInit} from '@angular/core';
import {ClinicService} from "../clinic.service";
import {ButtonContactEnquireComponent} from "../button-contact-enquire/button-contact-enquire.component";
import {BannerLogoComponent} from "../banner-logo/banner-logo.component";

@Component({
  selector: 'app-about-us',
  imports: [
    ButtonContactEnquireComponent,
    BannerLogoComponent
  ],
  templateUrl: './about-us.component.html',
  standalone: true,
  styleUrl: './about-us.component.scss'
})
export class AboutUsComponent implements OnInit {
  clinicName: string = "";

  constructor(private clinicService: ClinicService) { }

  ngOnInit(){
    this.clinicName = this.clinicService.getClinicName();
  }
}
