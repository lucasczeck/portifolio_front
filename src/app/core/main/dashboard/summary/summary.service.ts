import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Summary } from 'src/app/Interfaces/Summary';

@Injectable({
  providedIn: 'root'
})
export class SummaryService {
  private apiUrl = 'https://lucasczeck.up.railway.app/dashboard/summary'
  
  constructor(private http: HttpClient) { }

  getSummary(): Observable<Summary> {
    return this.http.get<Summary>(this.apiUrl)
  }
}
