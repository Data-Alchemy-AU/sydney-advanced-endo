import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Profile } from "./profile";
import { catchError, map, Observable, of } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private jsonUrl = 'assets/config_data.json';

  constructor(private http: HttpClient) {}

  getAllProfiles(): Observable<Profile[]> {
    return this.http.get<{ profiles: Profile[] }>(this.jsonUrl).pipe(
      map(data => data.profiles || []),
      catchError(error => {
        console.error('Error fetching staff profile details:', error);
        return of([]); // Return an empty array if JSON fetching fails
      })
    );
  }

  getProfileById(id: number): Observable<Profile | undefined> {
    return this.http.get<{ profiles: Profile[] }>(this.jsonUrl).pipe(
      map(data => data.profiles.find(profile => profile.id === id)),
      catchError(error => {
        console.error(`Error fetching profile ${id}:`, error);
        return of(undefined);
      })
    );
  }
}
