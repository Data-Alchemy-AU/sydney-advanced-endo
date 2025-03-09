import {Component, inject} from '@angular/core';
import {NgForOf} from "@angular/common";
import {Service} from "../service";
import {ServicesService} from "../services.service";
import {ServiceCardComponent} from "../service-card/service-card.component";
import {BannerLogoComponent} from "../banner-logo/banner-logo.component";

@Component({
    selector: 'app-services',
    imports: [
        NgForOf,
        ServiceCardComponent,
        BannerLogoComponent
    ],
    templateUrl: './services.component.html',
    styleUrl: './services.component.scss'
})
export class ServicesComponent {
  serviceService = inject(ServicesService);
  serviceList: Service[] = [];

  constructor() {

    this.serviceService.getAllServices()
      .subscribe({
        next: (profileList: Service[]) => {
          this.serviceList = profileList;
        },
        error: (error) => {
          console.error("Error fetching services:", error);
        }
      });
  }
}

