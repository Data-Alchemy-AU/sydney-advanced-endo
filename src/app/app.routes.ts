import { Routes } from '@angular/router';
import {HomeComponent} from './home/home.component'
import {AboutUsComponent} from "./about-us/about-us.component";
import {ServicesComponent} from "./services/services.component";
import {ContactUsComponent} from "./contact-us/contact-us.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {EnquireComponent} from "./enquire/enquire.component";
import {OurTeamComponent} from "./our-team/our-team.component";
import {OurTeamDetailComponent} from "./our-team-detail/our-team-detail.component";
import {SitemapComponent} from "./sitemap/sitemap.component";

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'our-team', component: OurTeamComponent },
  { path: 'contact-us', component: ContactUsComponent},
  { path: 'enquire', component: EnquireComponent},
  {path: 'our-team-detail/:id', component: OurTeamDetailComponent},
  {path: 'sitemap', component: SitemapComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];


