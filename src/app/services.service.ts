import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Service} from "./service";
import {environment} from "../environments/environment";
import {catchError, Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  private url = `${environment.apiUrl}/services`;

  constructor(private http: HttpClient) {}

  getAllServices(): Observable<Service[]> {
    return this.http.get<Service[]>(this.url).pipe(
      catchError(error => {
        console.error('Error fetching image URLs:', error);
        return of([]); // Return an empty array if API fails
      })
    );
  }
}
