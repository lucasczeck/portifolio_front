import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import { ProfessionalInfos } from 'src/app/Interfaces/ProfessionalInfos';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfessionalInfosService {
  private apiUrl: string = environment.apiUrl + 'aboutme/professional_infos'

  constructor(private http: HttpClient) { }

  getProfessionalInfos(): Observable<ProfessionalInfos> {
    return this.http.get<ProfessionalInfos>(this.apiUrl)
  }
}