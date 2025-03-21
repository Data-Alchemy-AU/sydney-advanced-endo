import {Component, Inject, Input, OnDestroy, OnInit, PLATFORM_ID} from '@angular/core';
import {CommonModule, isPlatformBrowser} from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import {Result} from "./result";
import {ImageCarouselService} from "../image-carousel.service";

@Component({
  selector: 'app-image-carousel',
  imports: [CommonModule, MatIconModule],
  templateUrl: './image-carousel.component.html',
  standalone: true,
  styleUrls: ['./image-carousel.component.scss']
})

export class ImageCarouselComponent implements OnInit, OnDestroy {

  @Input() indicatorsVisible = true;
  @Input() animationSpeed = 500;
  @Input() autoPlay = false;
  @Input() autoPlaySpeed = 3000;

  slides: Result[] = [];
  currentSlide = 0;
  private autoPlayInterval: any = null; // Track interval
  // faArrowRight =  faArrowRight;
  // faArrowLeft = faArrowLeft;
  hidden = false;

  constructor(
    private imageCarouselItems: ImageCarouselService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
  }

  next() {
    if (this.slides.length === 0) return; // Prevent out-of-bounds error
    // let currentSlide = (this.currentSlide + 1) % (this.slides.length);
    let currentSlide =this.mod(this.currentSlide + 1, this.slides.length);
    this.jumpToSlide(currentSlide);
    // console.log("Current slide is %d of %d slides\",this.currentSlide, this.slides.length);
  }

  previous() {
    if (this.slides.length === 0) return; // Prevent out-of-bounds error
    let currentSlide =
      this.mod(this.currentSlide - 1, this.slides.length);
      // (this.currentSlide - 1) %  (this.slides.length);
    console.log("Current slide is ",this.currentSlide, "of %d slides ", this.slides.length);

    this.jumpToSlide(currentSlide);
  }

  jumpToSlide(index: number) {
    this.hidden = true;
    setTimeout(() => {
      this.currentSlide = index;
      this.hidden = false;
      this.resetAutoPlay(); // Reset auto-play timer on manual navigation
    }, this.animationSpeed);
  }

  mod(n:number, m: number) {
    return ((n % m) + m) % m;
  }

  private startAutoPlay() {
    if (this.autoPlay && !this.autoPlayInterval) {
      this.autoPlayInterval = setInterval(() => {
        this.next();
      }, this.autoPlaySpeed);
    }
  }

  private resetAutoPlay() {
    if (this.autoPlay) {
      clearInterval(this.autoPlayInterval); // Clear existing interval
      this.autoPlayInterval = null;
      this.startAutoPlay(); // Restart auto-play timer
    }
  }

  ngOnInit() {
    // setting up the refresh interval caused a timeout in prerendering, so only set up interval if rendering in browser
    if (isPlatformBrowser(this.platformId)) {


      this.imageCarouselItems.getAllImageCarouselItems()
        .subscribe({
          next: (slides: Result[]) => {
            this.slides = slides;
            if (slides.length > 0) {
              this.currentSlide = 0;

              // **Start auto-play only after data is loaded**
              this.startAutoPlay(); // Start auto-play initially
            }
          },
          error: (error) => {
            console.error("Error fetching slides:", error);
          }
        });
    }
  }

  ngOnDestroy() {
    // **Ensure the interval is cleared on component destroy**
    if (this.autoPlayInterval) {
      clearInterval(this.autoPlayInterval);
      this.autoPlayInterval = null;
    }
  }

  getImageStyle(image: Result): any {
    return {
      'background-image': `url(${image.url})`,
      'background-position': `${image.centerX} ${image.centerY}`
    };
  }
}
