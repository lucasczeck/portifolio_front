import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-projetos-pessoais',
  templateUrl: './card-projetos-pessoais.component.html',
  styleUrls: ['./card-projetos-pessoais.component.css', '../../css/cards.css']
})
export class CardProjetosPessoaisComponent implements OnInit{
  @Input() dados!: {
    "finalized": {"value": number, "percentage": number}, 
    "development": {"value": number, "percentage": number}, 
    "published": {"value": number, "percentage": number}}

  constructor() {}

  ngOnInit(): void {}
}
