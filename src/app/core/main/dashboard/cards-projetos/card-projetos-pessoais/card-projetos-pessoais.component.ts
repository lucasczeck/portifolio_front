import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-projetos-pessoais',
  templateUrl: './card-projetos-pessoais.component.html',
  styleUrls: ['./card-projetos-pessoais.component.css', '../../css/cards.css']
})
export class CardProjetosPessoaisComponent implements OnInit{
  dados = {
    "finalized": {"value": 1, "percentage": 100.0}, 
    "development": {"value": 0, "percentage": 0.0}, 
    "published": {"value": 0, "percentage": 0.0}}

  constructor() {}

  ngOnInit(): void {}
}
