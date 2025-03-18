import {Component, ElementRef, HostListener, ViewChild} from '@angular/core';
import { RouterLink} from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatMenuModule} from "@angular/material/menu";
import {ButtonSharedComponent} from "../components/buttons/button-shared/button-shared.component";
import {MatDivider} from "@angular/material/divider";
import {LogoAdvancedComponent} from "../logo-advanced/logo-advanced.component";
import {MatSidenav, MatSidenavModule} from '@angular/material/sidenav';
import {MatListItem, MatNavList} from "@angular/material/list";

@Component({
  selector: 'app-navbar',
  imports: [
    MatButtonModule, MatIconModule,
    RouterLink, MatToolbarModule, MatMenuModule, ButtonSharedComponent, MatDivider,
    MatSidenavModule, LogoAdvancedComponent, MatNavList, MatListItem
  ],
  templateUrl: './navbar.component.html',
  standalone: true,
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent {
  @ViewChild('sidenav') sidenav!: MatSidenav;
  @ViewChild('sidenav', { read: ElementRef }) sidenavElement!: ElementRef;

  // Listen to window scroll events.
  @HostListener('window:scroll')
  onWindowScroll() {
    if (this.sidenav && this.sidenav.opened) {
      this.sidenav.close();
    }
  }

  // Close the sidenav when clicking anywhere in the document outside the sidenav element
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    if (this.sidenav && this.sidenav.opened) {
      const sidenavEl = this.sidenavElement.nativeElement;
      // If the click target is not inside the sidenav, close it.
      if (!sidenavEl.contains(event.target)) {
        this.sidenav.close();
      }
    }
  }
}
