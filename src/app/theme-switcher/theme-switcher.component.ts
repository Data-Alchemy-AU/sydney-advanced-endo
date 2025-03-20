import { Component } from '@angular/core';
import { ThemeService } from '../theme.service';
import {MatIcon} from "@angular/material/icon";
import {MatIconButton} from "@angular/material/button";
import {MatButtonToggle, MatButtonToggleGroup} from "@angular/material/button-toggle";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-theme-switcher',
  templateUrl: './theme-switcher.component.html',
  imports: [
    MatIcon,
    MatIconButton,
    MatButtonToggleGroup,
    MatButtonToggle,
    NgForOf,
    NgIf
  ],
  styleUrls: ['./theme-switcher.component.scss']
})
export class ThemeSwitcherComponent {
  selectedTheme: string = 'theme-st-vincents'; // default theme
  expanded: boolean = false; // start collapsed

  themes = [
    { value: 'theme-st-vincents', viewValue: 'St Vincents' },
    { value: 'theme-green', viewValue: 'Green' },
    { value: 'theme-purple', viewValue: 'Purple' }
  ];

  constructor(private themeService: ThemeService) {}

  onThemeChange(themeValue: string) {
    this.selectedTheme = themeValue;
    this.themeService.switchTheme(this.selectedTheme);
  }

  toggle() {
    this.expanded = !this.expanded;
  }
}
