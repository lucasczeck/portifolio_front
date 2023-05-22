import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-personal-infos',
  templateUrl: './personal-infos.component.html',
  styleUrls: ['./personal-infos.component.css']
})

export class PersonalInfosComponent implements OnInit{
  @Input() data!: any
  
  constructor() {}

  ngOnInit(): void {}
}
