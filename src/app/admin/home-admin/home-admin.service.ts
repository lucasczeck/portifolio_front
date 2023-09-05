import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import { CardsAdmin } from 'src/app/Interfaces/CardsAdmin';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class HomeAdminService {
  private apiUrl: string = environment.apiUrl + 'admin/get_cards'

  constructor(private http: HttpClient) { }

  getCards(): Observable<[CardsAdmin]> {
    return this.http.get<[CardsAdmin]>(this.apiUrl)
  }
}
