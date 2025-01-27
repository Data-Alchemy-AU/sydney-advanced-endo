import {Component, Input} from '@angular/core';
import {
    MatCardModule,
} from "@angular/material/card";
import {Service} from "../service";
import {CommonModule} from "@angular/common";
import {DomSanitizer, SafeStyle} from "@angular/platform-browser";

@Component({
  selector: 'app-service-card',
    imports: [
      CommonModule,
      MatCardModule
    ],
  standalone: true,
  templateUrl: './service-card.component.html',
  styleUrls: ['./service-card.component.scss']
})
export class ServiceCardComponent {
  @Input() service!: Service;
  @Input() sanitizer!: DomSanitizer;

  getBackgroundImage(url: string): SafeStyle {
    return this.sanitizer.bypassSecurityTrustStyle(`url('${url}')`);
  }
}
