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
  // Use a relative path that works in both dev and production
  private url = environment.production
    ? './assets/db.json'
    : `${environment.apiUrl}/services`;

  constructor(private http: HttpClient) {}

  getAllServices(): Observable<Service[]> {
    return this.http.get<any>(this.url).pipe(
      // Extract services from the response when using the static JSON file
      map(response => environment.production ? response.services : response),
      catchError(error => {
        console.error('Error fetching services:', error);
        return of([]);
      })
    );
  }
}
