import { Component, OnInit } from '@angular/core';

import { PersonalInfosService } from './personal-infos.service';

import { PersonalInfos } from 'src/app/Interfaces/PersonalInfos';

@Component({
  selector: 'app-personal-infos',
  templateUrl: './personal-infos.component.html',
  styleUrls: ['./personal-infos.component.css']
})

export class PersonalInfosComponent implements OnInit{
  data!: PersonalInfos
  
  constructor(private personalInfo: PersonalInfosService) {}

  ngOnInit(): void {
    this.getPersonalInfos()
  }

  getPersonalInfos(): void {
    this.personalInfo.getPersonalInfos().subscribe((data) => this.data = data)
  }
}