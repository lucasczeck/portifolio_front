import { Component, OnInit } from '@angular/core';

import { PersonalInfosService } from './aboutme.service';

import { PersonalInfos } from 'src/app/Interfaces/PersonalInfos';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent implements OnInit{
  data!: PersonalInfos
  
  constructor(private personalInfo: PersonalInfosService) {}

  ngOnInit(): void {
    this.getPersonalInfos()
  }

  getPersonalInfos(): void {
    this.personalInfo.getPersonalInfos().subscribe((data) => this.data = data)
  }
}
