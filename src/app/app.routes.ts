import { Routes } from '@angular/router';
import {HomeComponent} from './home/home.component'
import {AboutUsComponent} from "./about-us/about-us.component";
import {DoctorsComponent} from "./doctors/doctors.component";
import {ServicesComponent} from "./services/services.component";
import {ContactUsComponent} from "./contact-us/contact-us.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {EnquireComponent} from "./enquire/enquire.component";

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'doctors', component: DoctorsComponent },
  { path: 'contact-us', component: ContactUsComponent},
  { path: 'enquire', component: EnquireComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];
