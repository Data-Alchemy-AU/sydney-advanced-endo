import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import {catchError, of} from "rxjs";
import { Result } from './image-carousel/result';



@Injectable({
  providedIn: 'root'
})

export class ImageCarouselService {
  private URL = '../assets/Carousel/imageCarouselItems.json';

  constructor(private http: HttpClient) {
  }

  getItems() {
    return this.http.get<Result>(this.URL)
    // return this.http.get(URL).pipe(
    //   catchError(error => {
    //     console.error('Error fetching image carousel items:', error);
    //     return of({imageCarouselArray: []});
    //   })
    // );
  }
}
