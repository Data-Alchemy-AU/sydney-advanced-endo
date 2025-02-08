import { Component } from '@angular/core';
import { RouterOutlet} from '@angular/router';
import {FooterComponent} from './footer/footer.component';
import {NavbarComponent} from "./navbar/navbar.component";
import {BreadcrumbComponent} from "./breadcrumb/breadcrumb.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,
    FooterComponent, NavbarComponent, BreadcrumbComponent],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Sydney Advanced Endocrinology';
}
