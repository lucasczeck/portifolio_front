import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cards-projetos',
  templateUrl: './cards-projetos.component.html',
  styleUrls: ['./cards-projetos.component.css']
})

export class CardsProjetosComponent implements OnInit {
  @Input() cards!: {
      "personal":{
        "finalized": {"value": number, "percentage": number}, 
        "development": {"value": number, "percentage": number}, 
        "published": {"value": number, "percentage": number}}, 
      "professional": {
        "finalized": {"value": number, "percentage": number}, 
        "development": {"value": number, "percentage": number}, 
        "published": {"value": number, "percentage": number}}}

  constructor() {}

  ngOnInit(): void {}
}
