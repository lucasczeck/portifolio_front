import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-projetos-pessoais',
  templateUrl: './card-projetos-pessoais.component.html',
  styleUrls: ['./card-projetos-pessoais.component.css', '../../css/cards.css']
})
export class CardProjetosPessoaisComponent implements OnInit{
  dados = {
    "finalized": {"value": 1, "percentage": 33.33}, 
    "development": {"value": 1, "percentage": 33.33}, 
    "published": {"value": 1, "percentage": 33.33}}

  constructor() {}

  ngOnInit(): void {}
}
