import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl: string = environment.apiUrl + 'admin/login'

  constructor(private http: HttpClient) { }

  isAuthenticated(): boolean {
    if(this.getToken()) {
      return true
    } 
    else {
      return false
    }
  }

  login(username: string, password: string) {
    const loginData = { username: username, password: password };
    return this.http.post<any>(this.apiUrl, loginData);
  }

  saveToken(token: string) {
    localStorage.setItem('token', token);
  }
  
  getToken(): string | null {
    return localStorage.getItem('token');
  }

  clearToken() {
    localStorage.removeItem('token');
  }
}
