import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards-projetos',
  templateUrl: './cards-projetos.component.html',
  styleUrls: ['./cards-projetos.component.css']
})
export class CardsProjetosComponent implements OnInit {
  cards: object = {
      "personal":{
        "finalized": {"value": 1, "percentage": 100.0}, 
        "development": {"value": 0, "percentage": 0.0}, 
        "published": {"value": 0, "percentage": 0.0}}, 
      "professional": {
        "finalized": {"value": 0, "percentage": 0.0}, 
        "development": {"value": 0, "percentage": 0.0}, 
        "published": {"value": 0, "percentage": 0.0}}}

  constructor() {}

  ngOnInit(): void {}
}
