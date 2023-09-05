import { Component, OnInit } from '@angular/core';

import { CardsService } from './cards.service';

import { Cards } from 'src/app/Interfaces/Cards';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})

export class CardsComponent implements OnInit {
  data!: Cards

  constructor(private cardService: CardsService) {
    this.getCards()
  }

  ngOnInit(): void {}

  getCards(): void {
    this.cardService.getCards().subscribe((data) => this.data = data)
  }
}
