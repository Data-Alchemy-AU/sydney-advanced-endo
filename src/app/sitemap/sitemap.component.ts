import { Component, OnInit } from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import { ProfileService } from '../profile.service';
import { CommonModule } from "@angular/common";

interface SitemapEntry {
  path?: string;
  label: string;
  children?: SitemapEntry[];
}

@Component({
  selector: 'app-sitemap',
  templateUrl: './sitemap.component.html',
  imports: [
    RouterLink,
    CommonModule
  ],
  styleUrls: ['./sitemap.component.css']
})
export class SitemapComponent implements OnInit {
  sitemapLinks: SitemapEntry[] = [];

  constructor(private router: Router, private profileService: ProfileService) {}

  ngOnInit() {
    // Get static routes (excluding wildcard & dynamic ones)
    let staticRoutes: SitemapEntry[] = this.router.config
      .filter(route => route.path && !route.path.includes('/:') && route.path !== '**' && route.path !== 'our-team') // Exclude our-team if already in routes
      .map(route => ({
        path: `/${route.path ?? ''}`,
        label: this.formatRouteName(route.path ?? 'Unknown')
      }));

    // Create "OUR TEAM" section (only if profiles exist)
    this.profileService.getAllProfiles().subscribe(profiles => {
      if (profiles.length > 0) {
        const ourTeamEntry: SitemapEntry = {
          label: 'OUR TEAM',
          path: `/our-team`,
          children: profiles.map(profile => ({
            path: `/our-team-detail/${profile.id}`,
            label: `${profile.title} ${profile.firstname} ${profile.lastname}`
          }))
        };

        this.sitemapLinks = [...staticRoutes, ourTeamEntry]; // Only one "OUR TEAM"
      } else {
        this.sitemapLinks = staticRoutes; // Avoid adding empty section
      }
    });
  }

  private formatRouteName(path: string): string {
    return path.replace(/-/g, ' ').toUpperCase();
  }
}
