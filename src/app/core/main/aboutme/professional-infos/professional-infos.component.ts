import { Component, OnInit } from '@angular/core';

import { ProfessionalInfosService } from './professional-infos.service';

import { ProfessionalInfos } from 'src/app/Interfaces/ProfessionalInfos';

@Component({
  selector: 'app-professional-infos',
  templateUrl: './professional-infos.component.html',
  styleUrls: ['./professional-infos.component.css']
})

export class ProfessionalInfosComponent implements OnInit{
  data!: ProfessionalInfos
  
  constructor(private professionalInfos: ProfessionalInfosService) {}

  ngOnInit(): void {
    this.getProfessionalInfos()
  }

  getProfessionalInfos(): void {
    this.professionalInfos.getProfessionalInfos().subscribe((data) => this.data = data)
  }
}
