import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Service} from "./service";

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  private url = 'http://localhost:3000/services';

  constructor(private http: HttpClient) {}

  async getAllServices(): Promise<Service[]> {
    const data = await fetch(this.url);
    return (await data.json()) ?? [];
  }
}
