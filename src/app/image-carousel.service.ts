import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Result } from './image-carousel/result';
import {catchError, Observable, of} from "rxjs";
import { environment } from '../environments/environment';



@Injectable({
  providedIn: 'root'
})

export class ImageCarouselService {
  private url = `${environment.apiUrl}/imageCarouselArray`;
  constructor(
    private http: HttpClient) {
  }

  // async getAllImageCarouselItems(): Promise<Result[]> {
  //   const data = await fetch(this.url);
  //   return (await data.json()) ?? [];
  // }
  //
  // async getImageCarouselItemById(id: number): Promise<Result| undefined> {
  //   const data = await fetch(`${this.url}/${id}`);
  //   return (await data.json()) ?? {};
  // }

  getAllImageCarouselItems(): Observable<Result[]> {
    return this.http.get<Result[]>(this.url).pipe(
      catchError(error => {
        console.error('Error fetching image URLs:', error);
        return of([]); // Return an empty array if API fails
      })
    );
  }

  getImageCarouselItemById(id: number): Observable<undefined | Result> {
    return this.http.get<Result>(`${this.url}/${id}`).pipe(
      catchError(error => {
        console.error(`Error fetching image ${id}: `, error);
        return of(undefined); // Return an empty array if API fails
      })
    );
  }
}
