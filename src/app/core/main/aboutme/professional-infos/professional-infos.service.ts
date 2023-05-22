import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import { ProfessionalInfos } from 'src/app/Interfaces/ProfessionalInfos';

@Injectable({
  providedIn: 'root'
})
export class ProfessionalInfosService {
  private apiUrl = 'https://lucasczeck.up.railway.app/aboutme/professional_infos'

  constructor(private http: HttpClient) { }

  getProfessionalInfos(): Observable<ProfessionalInfos> {
    return this.http.get<ProfessionalInfos>(this.apiUrl)
  }
}