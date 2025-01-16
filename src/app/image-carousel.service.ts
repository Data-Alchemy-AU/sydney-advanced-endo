import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import {catchError, of} from "rxjs";
import { Result } from './image-carousel/result';



@Injectable({
  providedIn: 'root'
})


export class ImageCarouselService {

  private url = 'http://localhost:3000/imageCarouselArray';
  constructor(private http: HttpClient) {
  }

  async getAllImageCarouselItems(): Promise<Result[]> {
    const data = await fetch(this.url);
    return (await data.json()) ?? [];
  }

  async getImageCarouselItemById(id: number): Promise<Result| undefined> {
    const data = await fetch(`${this.url}/${id}`);
    return (await data.json()) ?? {};
  }

  // getItems() {
  //   return this.http.get<Result>(this.URL)
  //   // return this.http.get(URL).pipe(
  //   //   catchError(error => {
  //   //     console.error('Error fetching image carousel items:', error);
  //   //     return of({imageCarouselArray: []});
  //   //   })
  //   // );
  // }
}
