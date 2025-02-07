import { Component, Input, HostBinding } from '@angular/core';
import {RouterLink, RouterLinkActive} from "@angular/router";
import {MatButtonModule} from "@angular/material/button";
import {CommonModule} from '@angular/common'
@Component({
  selector: 'app-button-shared',
  imports: [
    RouterLink,
    RouterLinkActive,
    MatButtonModule,
    CommonModule
  ],
  templateUrl: './button-shared.component.html',
  styleUrl: './button-shared.component.scss'
})

export class ButtonSharedComponent {
  @Input() buttonType?: 'home' | 'about-us' | 'services' | 'our-team'|'contact-us' | 'enquire';
  @Input() variant?: 'basic' | 'raised' | 'stroked' | 'flat'; // ✅ Allow explicit override
  @Input() color?: 'primary' | 'accent' | 'warn' |'default'; // Optional color override
  @Input() buttonText? : string ; // Optional text override
  @Input() buttonLink?: string; // ✅ Custom link

  // ✅ Define button properties inside the component
  private buttonConfigs: Record<string, { buttonText: string; buttonLink: string; color: string|undefined; variant: string }> = {
    'home': { buttonText: 'Home', buttonLink: '/home', color: 'primary', variant: 'flat'},
    'about-us': { buttonText: 'About Us', buttonLink: '/about-us', color: 'primary', variant: 'flat'},
    'our-team': { buttonText: 'Our Team', buttonLink: '/our-team', color: 'primary', variant: 'flat' },
    'services': { buttonText: 'Services', buttonLink: '/services', color: 'primary', variant: 'flat' },
    'contact-us': { buttonText: 'Contact Us', buttonLink: '/contact-us', color: 'primary', variant: 'flat' },
    'enquire': { buttonText: 'Enquire', buttonLink: '/enquire', color: 'primary', variant: 'flat' }
  };

  // ✅ Use `variant` override if provided, otherwise use `buttonType`
  get text(): string {
    return this.buttonText ?? (this.buttonType ? this.buttonConfigs[this.buttonType]?.buttonText || 'Click Me' : 'Click Me');
  }

  get link(): string {
    return this.buttonLink ?? (this.buttonType ? this.buttonConfigs[this.buttonType]?.buttonLink|| '/' : '/');
  }

  get colorClass(): string |undefined {
    const colorValue = this.color || (this.buttonType ? this.buttonConfigs[this.buttonType]?.color : undefined);
    return colorValue === 'default' ? undefined : colorValue; // if colorvalue is default then return undefined, otherwise return color value;
    // return this.color || (this.buttonType ? this.buttonConfigs[this.buttonType]?.color : undefined);
  }

  get materialVariant(): string {
    return this.variant || (this.buttonType ? this.buttonConfigs[this.buttonType]?.variant : 'basic');
  }

  // ✅ Determine if it's an external link
  get isExternalLink(): boolean {
    return this.link.startsWith('http') || this.link.startsWith('//');
  }
}
