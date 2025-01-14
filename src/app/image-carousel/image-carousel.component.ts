import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-image-carousel',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './image-carousel.component.html',
  styleUrl: './image-carousel.component.scss'
})
export class ImageCarouselComponent {
  imageUrl = './assets/Carousel/image1.jpeg';
  imageAlt = 'Banner image';
}
