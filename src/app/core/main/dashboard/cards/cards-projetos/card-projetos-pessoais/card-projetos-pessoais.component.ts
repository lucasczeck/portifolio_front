import { Component, OnInit, Input } from '@angular/core';

import { CardsProjects } from 'src/app/Interfaces/CardsProjects';

@Component({
  selector: 'app-card-projetos-pessoais',
  templateUrl: './card-projetos-pessoais.component.html',
  styleUrls: ['./card-projetos-pessoais.component.css', '../../css/cards.css']
})
export class CardProjetosPessoaisComponent implements OnInit{
  @Input() dados!: CardsProjects

  constructor() {}

  ngOnInit(): void {}
}
