import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Service} from "./service";
import {catchError, map, Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  private jsonUrl = 'assets/config_data.json';

  constructor(private http: HttpClient) {}

  getAllServices(): Observable<Service[]> {
    return this.http.get<{ services: Service[] }>(this.jsonUrl).pipe(
      map(data => data.services || []),
      catchError(error => {
        console.error('Error fetching services:', error);
        return of([]); // Return an empty array if JSON fetching fails
      })
    );
  }
}
