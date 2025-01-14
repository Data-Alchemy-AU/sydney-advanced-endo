import { Component } from '@angular/core';
import {ImageCarouselComponent} from "../image-carousel/image-carousel.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ImageCarouselComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
