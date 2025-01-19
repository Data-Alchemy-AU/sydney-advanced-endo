import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import {Result} from "./result";
import {ImageCarouselService} from "../image-carousel.service";

@Component({
  selector: 'app-image-carousel',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './image-carousel.component.html',
  styleUrls: ['./image-carousel.component.scss'],
})

export class ImageCarouselComponent implements OnInit {
  // imageCarouselArray: object[] ;
  slides: Result[] = [];
  // @Input() slides: any[] = [];

  @Input() indicatorsVisible = true;
  @Input() animationSpeed = 500;
  @Input() autoPlay = false;
  @Input() autoPlaySpeed = 3000;
  currentSlide = 0;
  // faArrowRight =  faArrowRight;
  // faArrowLeft = faArrowLeft;
  hidden = false;

  constructor(private imageCarouselItems: ImageCarouselService) {
    // this.imageCarouselItems.getAllImageCarouselItems().then(
    //   (slides: Result[]) => {
    //   this.slides = slides;
    // });
  }

  next() {
    if (this.slides.length === 0) return; // Prevent out-of-bounds error
    let currentSlide = (this.currentSlide + 1) % (this.slides.length);
    this.jumpToSlide(currentSlide);
    // console.log("Current slide is %d of %d slides\",this.currentSlide, this.slides.length);
  }

  previous() {
    if (this.slides.length === 0) return; // Prevent out-of-bounds error

    let currentSlide =
      (this.currentSlide - 1) %  (this.slides.length);
    this.jumpToSlide(currentSlide);
  }

  jumpToSlide(index: number) {
    this.hidden = true;
    setTimeout(() => {
      this.currentSlide = index;
      this.hidden = false;
    }, this.animationSpeed);
  }

  ngOnInit() {

    // this.imageCarouselItems.getAllImageCarouselItems().then((slides: Result[]) => {
    //   this.slides = slides;
    // })

    this.imageCarouselItems.getAllImageCarouselItems().then((slides: Result[]) => {
      this.slides = slides;
      if (slides.length > 0) {
        this.currentSlide = 0; // Start at the first slide when data is available
      }
    }).catch((error) => {
      console.error("Error fetching slides:", error);
    });

    if (this.autoPlay) {
      setInterval(() => {
        this.next();
      }, this.autoPlaySpeed);
    }
  }
}
