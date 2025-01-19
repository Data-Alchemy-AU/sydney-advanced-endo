import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ClinicService {
  clinicName: string = 'Sydney Advanced Endocrinology'; // Set your clinic name here

  getClinicName() {return this.clinicName}
}
