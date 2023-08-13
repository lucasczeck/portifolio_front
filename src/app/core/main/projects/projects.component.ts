import { Component, OnInit } from '@angular/core';

import { ProjectsService } from './projects.service';

import { ProjectsList } from 'src/app/Interfaces/ProjectsList';

import { ProjectsInfos } from 'src/app/Interfaces/ProjectsInfos';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  data: ProjectsList

  constructor(private projectsService: ProjectsService) {
    const projects: ProjectsInfos[] = [
      { photo: 'https://www.farmaciasnissei.com.br/media/produtos/16275%20_200x200.jpg', name: 'Projeto de teste', id: 1, url: 'https://www.google.com.br', status: true },
      { photo: 'https://www.farmaciasnissei.com.br/media/produtos/16275%20_200x200.jpg', name: 'Projeto de teste', id: 2, url: 'https://www.google.com.br', status: true },
      { photo: 'https://www.farmaciasnissei.com.br/media/produtos/16275%20_200x200.jpg', name: 'Projeto de teste', id: 3, url: 'https://www.google.com.br', status: false },
      { photo: 'https://www.farmaciasnissei.com.br/media/produtos/16275%20_200x200.jpg', name: 'Projeto de teste', id: 4, url: 'https://www.google.com.br', status: true },
      { photo: 'https://www.farmaciasnissei.com.br/media/produtos/16275%20_200x200.jpg', name: 'Projeto de teste', id: 5, url: 'https://www.google.com.br', status: true },
      { photo: 'https://www.farmaciasnissei.com.br/media/produtos/16275%20_200x200.jpg', name: 'Projeto de teste', id: 6, url: 'https://www.google.com.br', status: false },
      { photo: 'https://www.farmaciasnissei.com.br/media/produtos/16275%20_200x200.jpg', name: 'Projeto de teste', id: 7, url: 'https://www.google.com.br', status: true },
    ];

    this.data = { projects: projects };
  }

  ngOnInit(): void {}

}
