import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Profile} from "./profile";
import {environment} from "../environments/environment";
import {catchError, map, Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})

// export class ProfileService {
//
//   private url = `${environment.apiUrl}/profiles`;
//
//   constructor(private http: HttpClient) {
//   }
//
//   getAllProfiles(): Observable<Profile[]> {
//     return this.http.get<Profile[]>(this.url).pipe(
//       catchError(error => {
//         console.error('Error fetching staff profile details:', error);
//         return of([]); // Return an empty array if API fails
//       })
//     );
//   }
//
//   getProfileById(id: number): Observable<Profile | undefined> {
//     return this.http.get<Profile>(`${this.url}/${id}`).pipe(
//       catchError(error => {
//         console.error(`Error fetching image ${id}: `, error);
//         return of(undefined); // Return an empty array if API fails
//       })
//     );
//   }
// }
export class ProfileService {
  constructor(private http: HttpClient) {}

  getAllProfiles(): Observable<Profile[]> {
    if (environment.production) {
      // Use environment.apiUrl directly for production
      return this.http.get<any>(environment.apiUrl).pipe(
        map(response => response.profiles),
        catchError(error => {
          console.error('Error fetching profiles:', error);
          return of([]);
        })
      );
    } else {
      // In development, append '/profiles' to the API URL
      return this.http.get<Profile[]>(`${environment.apiUrl}/profiles`).pipe(
        catchError(error => {
          console.error('Error fetching profiles:', error);
          return of([]);
        })
      );
    }
  }

  getProfileById(id: number): Observable<Profile | undefined> {
    if (environment.production) {
      return this.http.get<any>(environment.apiUrl).pipe(
        map(response => {
          const profiles = response.profiles || [];
          return profiles.find((profile: Profile) => profile.id === id);
        }),
        catchError(error => {
          console.error(`Error fetching profile ${id}:`, error);
          return of(undefined);
        })
      );
    } else {
      return this.http.get<Profile>(`${environment.apiUrl}/profiles/${id}`).pipe(
        catchError(error => {
          console.error(`Error fetching profile ${id}:`, error);
          return of(undefined);
        })
      );
    }
  }
}
