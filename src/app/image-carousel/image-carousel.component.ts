import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {NgClass, NgForOf, NgOptimizedImage, NgStyle} from "@angular/common";
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import {Result} from './result';

import {ImageCarouselService} from "../image-carousel.service";

@Component({
  selector: 'app-image-carousel',
  standalone: true,
  imports: [
    NgOptimizedImage,
    NgClass,
    NgStyle,
    HttpClientModule,
    NgForOf
  ],
  templateUrl: './image-carousel.component.html',
  styleUrls: ['./image-carousel.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})

// export class ImageCarouselComponent {
//   // imageUrl = './assets/Carousel/image1.jpeg';
//   // imageAlt = 'Banner image';
//
//   slides: string[];
//   i: number;
//
//   constructor() {
//     this.i = 0;
//     this.slides = [
//       './assets/Carousel/image1.jpeg',
//       './assets/Carousel/image2.jpeg',
//       './assets/Carousel/image3.jpeg',
//     ];
//   }
//   getSlide() {
//     return this.slides[this.i];
//   }
//
//   getPrev() {
//     this.i == 0 ? (this.i = this.slides.length - 1) : this.i--;
//   }
//
//   getNext() {
//     this.i < this.slides.length - 1 ? this.i++ : (this.i = 0);
//   }
// }


export class ImageCarouselComponent implements OnInit {
  // imageCarouselArray: object[] ;
  imageCarouselArray: Result[] = [];
  transform: number = 100;
  selectedIndex = 0;

  constructor(private imageCarouselItems: ImageCarouselService) {
    this.imageCarouselItems.getAllImageCarouselItems().then((imageCarouselArray: Result[]) => {
      this.imageCarouselArray = imageCarouselArray;
      this.selectedIndex = 0;
      this.transform = 100;
    });
  }

  ngOnInit() {
    this.imageCarouselItems.getAllImageCarouselItems().then((imageCarouselArray: Result[]) => {
      this.imageCarouselArray = imageCarouselArray;
    })
  }

  // ngOnInit() {
  //   this.imageCarouselItems.getAllImageCarouselItems().subscribe(
  //     (imageStream:Result[]) => {
  //       this.imageCarouselArray = imageStream ;
  //   });
  // }

  selected(x:any) {
    this.downSelected(x);
    this.selectedIndex = x;
  }

  keySelected(x:any) {
    this.downSelected(x);
    this.selectedIndex = x;
  }

  downSelected(i:any) {
    this.transform =  100 - (i) * 50;
    this.selectedIndex = this.selectedIndex + 1;
    if (this.selectedIndex > 3) {
      this.selectedIndex = 0;
    }
  }

  // downSelected(index:number){
  //   this.updateTransform(index);
  // }
  //
  // private updateTransform(index: number) {
  //   if (!this.imageCarouselArray.length) return;
  //   this.selectedIndex = index % this.imageCarouselArray.length;
  //   this.transform = -this.selectedIndex * 100; // Adjust based on slide width
  // }
}
