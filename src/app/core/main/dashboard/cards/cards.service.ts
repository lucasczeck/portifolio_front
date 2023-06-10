import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Cards } from 'src/app/Interfaces/Cards';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CardsService {
  private apiUrl: string = environment.apiUrl + 'dashboard/cards'
  
  constructor(private http: HttpClient) { }

  getCards(): Observable<Cards> {
    return this.http.get<Cards>(this.apiUrl)
  }
}
