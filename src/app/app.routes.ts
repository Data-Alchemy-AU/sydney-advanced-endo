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
import {TestComponent } from "./test/test.component";

export const routes: Routes = [
  { path: 'home', component: HomeComponent, data: {breadcrumb: '<mat-icon>home</mat-icon>'}},
  { path: 'about-us', component: AboutUsComponent , data: {breadcrumb: 'About Us'}},
  { path: 'services', component: ServicesComponent , data: {breadcrumb: 'Services'}},
  { path: 'our-team', component: OurTeamComponent , data: {breadcrumb: 'Our Team'}},
  {path: 'our-team-detail/:id', component: OurTeamDetailComponent, data: {breadcrumb: ':id'}},

  // { path: 'our-team', component: OurTeamComponent, data: {breadcrumb: 'Our Team'},
  //   children: [
  //     {path: 'detail/:id', component: OurTeamDetailComponent, data: {breadcrumb: 'Team Member'}},
  //   ]},

  { path: 'contact-us', component: ContactUsComponent, data: {breadcrumb: 'Contact Us'}},
  { path: 'enquire', component: EnquireComponent, data: {breadcrumb: 'Enquire'}},
  {path: 'sitemap', component: SitemapComponent, data: {breadcrumb: 'Site Map'}},
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];


