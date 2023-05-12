import { Component, OnInit, Input } from '@angular/core';

import { Projects } from 'src/app/Interfaces/Projects';

@Component({
  selector: 'app-cards-projetos',
  templateUrl: './cards-projetos.component.html',
  styleUrls: ['./cards-projetos.component.css']
})

export class CardsProjetosComponent implements OnInit {
  @Input() cards!: Projects

  constructor() {}

  ngOnInit(): void {}
}
