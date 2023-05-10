import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardsService {
  private apiUrl = 'https://lucasczeck.up.railway.app/dashboard/cards'
  
  constructor(private http: HttpClient) { }

  getCards(): Observable<any> {
    return this.http.get<any>(this.apiUrl)
  }
}
