import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private themeLinkId = 'dynamic-theme';

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(DOCUMENT) private document: Document
  ) {
    // Avoid DOM access here.
  }

  // Call this method after the view is initialized.
  initializeThemeLink(): void {
    if (isPlatformBrowser(this.platformId)) {
      let themeLink = this.document.getElementById(this.themeLinkId) as HTMLLinkElement;
      if (!themeLink) {
        themeLink = this.document.createElement('link');
        themeLink.id = this.themeLinkId;
        themeLink.rel = 'stylesheet';
        this.document.head.appendChild(themeLink);
      }
    }
  }

  switchTheme(themeName: string): void {
    if (isPlatformBrowser(this.platformId)) {
      const themeLink = this.document.getElementById(this.themeLinkId) as HTMLLinkElement;
      if (themeLink) {
        themeLink.href = `assets/${themeName}.css`;
      }
      // Update the body class while keeping mat-typography.
      this.document.body.className = `mat-typography ${themeName}`;
    }
  }
}
