import { Component, OnInit, Input } from '@angular/core';
import { CardsAdmin } from 'src/app/Interfaces/CardsAdmin';

@Component({
  selector: 'app-card-admin',
  templateUrl: './card-admin.component.html',
  styleUrls: ['./card-admin.component.css']
})
export class CardAdminComponent implements OnInit {
  @Input() data!: CardsAdmin

  constructor() {}

  ngOnInit(): void {}
}
