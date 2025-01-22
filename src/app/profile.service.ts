import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Profile} from "./profile";

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private url = 'http://localhost:3000/profiles';

  constructor(private http: HttpClient) {}

  async getAllProfiles(): Promise<Profile[]> {
    const data = await fetch(this.url);
    return (await data.json()) ?? [];
  }

  async getProfileById(id: number): Promise<Profile| undefined> {
    const data = await fetch(`${this.url}/${id}`);
    return (await data.json()) ?? {};
  }
}
