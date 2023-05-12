import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Cards } from 'src/app/Interfaces/Cards';

@Injectable({
  providedIn: 'root'
})
export class CardsService {
  private apiUrl = 'https://lucasczeck.up.railway.app/dashboard/cards'
  
  constructor(private http: HttpClient) { }

  getCards(): Observable<Cards> {
    return this.http.get<Cards>(this.apiUrl)
  }
}
