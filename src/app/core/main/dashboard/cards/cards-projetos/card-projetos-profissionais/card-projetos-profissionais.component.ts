import { Component, OnInit, Input } from '@angular/core';

import { CardsProjects } from 'src/app/Interfaces/CardsProjects';

@Component({
  selector: 'app-card-projetos-profissionais',
  templateUrl: './card-projetos-profissionais.component.html',
  styleUrls: ['./card-projetos-profissionais.component.css', '../../css/cards.css']
})
export class CardProjetosProfissionaisComponent implements OnInit{
  @Input() dados!: CardsProjects

  constructor() {}

  ngOnInit(): void {}
}
