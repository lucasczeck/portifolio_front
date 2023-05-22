import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import { PersonalInfos } from 'src/app/Interfaces/PersonalInfos';

@Injectable({
  providedIn: 'root'
})
export class PersonalInfosService {
  private apiUrl = 'https://lucasczeck.up.railway.app/aboutme/personal_infos'

  constructor(private http: HttpClient) { }

  getPersonalInfos(): Observable<PersonalInfos> {
    return this.http.get<PersonalInfos>(this.apiUrl)
  }
}
