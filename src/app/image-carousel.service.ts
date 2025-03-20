import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Result } from './image-carousel/result';
import { catchError, map, Observable, of } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ImageCarouselService {
  private jsonUrl = 'assets/config_data.json';

  constructor(private http: HttpClient) {}

  getAllImageCarouselItems(): Observable<Result[]> {
    return this.http.get<{ imageCarouselArray: Result[] }>(this.jsonUrl).pipe(
      map(data => data.imageCarouselArray || []),
      catchError(error => {
        console.error('Error fetching image URLs:', error);
        return of([]); // Return an empty array if JSON fetching fails
      })
    );
  }

  getImageCarouselItemById(id: number): Observable<undefined | Result> {
    return this.http.get<{ imageCarouselArray: Result[] }>(this.jsonUrl).pipe(
      map(data => data.imageCarouselArray.find(item => item.id === id)),
      catchError(error => {
        console.error(`Error fetching image ${id}:`, error);
        return of(undefined);
      })
    );
  }
}
