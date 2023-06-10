import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Summary } from 'src/app/Interfaces/Summary';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SummaryService {
  private apiUrl: string = environment.apiUrl + 'dashboard/summary'
  
  constructor(private http: HttpClient) { }

  getSummary(): Observable<Summary> {
    return this.http.get<Summary>(this.apiUrl)
  }
}
