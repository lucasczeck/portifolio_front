import { Component, OnInit, Input } from '@angular/core';

import { Commits } from 'src/app/Interfaces/Commits';

@Component({
  selector: 'app-card-github',
  templateUrl: './card-github.component.html',
  styleUrls: ['./card-github.component.css', '../css/cards.css']
})
export class CardGithubComponent implements OnInit {
  @Input() cards!: Commits

  constructor() {}

  ngOnInit(): void {}
}
