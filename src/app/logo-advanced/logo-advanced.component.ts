import { Component } from '@angular/core';

@Component({
  selector: 'app-logo-advanced',
  imports: [],
  templateUrl: './logo-advanced.component.html',
  styleUrl: './logo-advanced.component.scss'
})
export class LogoAdvancedComponent {
  theme = {
    primary: '#ff5733',  // Change this based on your theme
    secondary: '#33ff57',
    tertiary: '#3357ff'
  };
}
