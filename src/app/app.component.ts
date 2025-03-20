import { Component } from '@angular/core';
import { RouterOutlet} from '@angular/router';
import {FooterComponent} from './footer/footer.component';
import {NavbarComponent} from "./navbar/navbar.component";
import {BannerContactComponent} from "./banner-contact/banner-contact.component";
import {ThemeSwitcherComponent} from "./theme-switcher/theme-switcher.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,
    FooterComponent, NavbarComponent, BannerContactComponent, ThemeSwitcherComponent],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Sydney Advanced Endocrinology';
  currentTheme = 'theme-st-vincents';

  switchTheme(theme: string) {
    this.currentTheme = theme;
  }
}
