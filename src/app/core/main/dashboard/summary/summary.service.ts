import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SummaryService {
  private apiUrl = 'https://lucasczeck.up.railway.app/dashboard/summary'
  
  constructor(private http: HttpClient) { }

  getSummary(): Observable<any> {
    return this.http.get<any>(this.apiUrl)
  }
}
