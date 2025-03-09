import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Service} from "./service";
import {environment} from "../environments/environment";
import {catchError, map, Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
// export class ServicesService {
//
//   private url = `${environment.apiUrl}/services`;
//
//   constructor(private http: HttpClient) {}
//
//   getAllServices(): Observable<Service[]> {
//     return this.http.get<Service[]>(this.url).pipe(
//       catchError(error => {
//         console.error('Error fetching image URLs:', error);
//         return of([]); // Return an empty array if API fails
//       })
//     );
//   }
// }
export class ServicesService {
  constructor(private http: HttpClient) {}

  getAllServices(): Observable<Service[]> {
    if (environment.production) {
      // Use environment.apiUrl directly for production
      return this.http.get<any>(environment.apiUrl).pipe(
        map(response => response.services),
        catchError(error => {
          console.error('Error fetching services:', error);
          return of([]);
        })
      );
    } else {
      // In development, append '/services' to the API URL
      return this.http.get<Service[]>(`${environment.apiUrl}/services`).pipe(
        catchError(error => {
          console.error('Error fetching services:', error);
          return of([]);
        })
      );
    }
  }
}
