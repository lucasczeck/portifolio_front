import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import { ProjectsList } from 'src/app/Interfaces/ProjectsList';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  private apiUrl: string = environment.apiUrl + 'projects/get_projects'
  
  constructor(private http: HttpClient) { }

}
