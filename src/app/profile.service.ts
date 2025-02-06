import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Profile} from "./profile";
import {environment} from "../environments/environment";
import {catchError, Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class ProfileService {

  private url = `${environment.apiUrl}/profiles`;

  constructor(private http: HttpClient) {
  }

  getAllProfiles(): Observable<Profile[]> {
    return this.http.get<Profile[]>(this.url).pipe(
      catchError(error => {
        console.error('Error fetching staff profile details:', error);
        return of([]); // Return an empty array if API fails
      })
    );
  }

  getProfileById(id: number): Observable<Profile | undefined> {
    return this.http.get<Profile>(`${this.url}/${id}`).pipe(
      catchError(error => {
        console.error(`Error fetching image ${id}: `, error);
        return of(undefined); // Return an empty array if API fails
      })
    );
  }
}
