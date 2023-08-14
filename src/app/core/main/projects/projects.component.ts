import { Component, OnInit } from '@angular/core';

import { ProjectsService } from './projects.service';

import { ProjectsList } from 'src/app/Interfaces/ProjectsList';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  data!: ProjectsList

  constructor(private projectsService: ProjectsService) {}

  ngOnInit(): void {
    this.getProjects()
  }

  getProjects(): void {
    this.projectsService.getProjects().subscribe((data) => this.data = data)
  }

}
