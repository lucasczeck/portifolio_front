import { Component, OnInit } from '@angular/core';

import { HomeAdminService } from './home-admin.service';

import { CardsAdmin } from 'src/app/Interfaces/CardsAdmin';

@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.component.html',
  styleUrls: ['./home-admin.component.css']
})

export class HomeAdminComponent implements OnInit {
  data!: [CardsAdmin]

  constructor(private homeAdminService: HomeAdminService) {
    this.getCards()
  }

  ngOnInit(): void {}

  getCards(): void {
    this.homeAdminService.getCards().subscribe((data) => this.data = data)
  }
}
