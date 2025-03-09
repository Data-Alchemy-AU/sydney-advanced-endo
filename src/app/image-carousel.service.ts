import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Result } from './image-carousel/result';
import {catchError, map, Observable, of} from "rxjs";
import { environment } from '../environments/environment';



@Injectable({
  providedIn: 'root'
})

// export class ImageCarouselService {
//   private url = `${environment.apiUrl}/imageCarouselArray`;
//   constructor(
//     private http: HttpClient) {
//   }
//
//   // async getAllImageCarouselItems(): Promise<Result[]> {
//   //   const data = await fetch(this.url);
//   //   return (await data.json()) ?? [];
//   // }
//   //
//   // async getImageCarouselItemById(id: number): Promise<Result| undefined> {
//   //   const data = await fetch(`${this.url}/${id}`);
//   //   return (await data.json()) ?? {};
//   // }
//
//   getAllImageCarouselItems(): Observable<Result[]> {
//     return this.http.get<Result[]>(this.url).pipe(
//       catchError(error => {
//         console.error('Error fetching image URLs:', error);
//         return of([]); // Return an empty array if API fails
//       })
//     );
//   }
//
//   getImageCarouselItemById(id: number): Observable<undefined | Result> {
//     return this.http.get<Result>(`${this.url}/${id}`).pipe(
//       catchError(error => {
//         console.error(`Error fetching image ${id}: `, error);
//         return of(undefined); // Return an empty array if API fails
//       })
//     );
//   }
// }
export class ImageCarouselService {
  constructor(private http: HttpClient) {}

  getAllImageCarouselItems(): Observable<Result[]> {
    return this.http.get<any>(environment.apiUrl).pipe(
      map(response => response.imageCarouselArray || []),
      catchError(error => {
        console.error('Error fetching image carousel items:', error);
        return of([]);
      })
    );
  }

  getImageCarouselItemById(id: number): Observable<undefined | Result> {
    return this.http.get<any>(environment.apiUrl).pipe(
      map(response => {
        const items = response.imageCarouselArray || [];
        return items.find((item: Result) => item.id === id);
      }),
      catchError(error => {
        console.error(`Error fetching image ${id}:`, error);
        return of(undefined);
      })
    );
  }
}
