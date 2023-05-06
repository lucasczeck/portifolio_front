import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-projetos-profissionais',
  templateUrl: './card-projetos-profissionais.component.html',
  styleUrls: ['./card-projetos-profissionais.component.css', '../../css/cards.css']
})
export class CardProjetosProfissionaisComponent implements OnInit{
  @Input() dados!: {
    "finalized": {"value": number, "percentage": number}, 
    "development": {"value": number, "percentage": number}, 
    "published": {"value": number, "percentage": number}}

  constructor() {}

  ngOnInit(): void {}
}
