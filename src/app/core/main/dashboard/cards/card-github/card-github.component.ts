import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-github',
  templateUrl: './card-github.component.html',
  styleUrls: ['./card-github.component.css', '../css/cards.css']
})
export class CardGithubComponent implements OnInit {
  @Input() cards!: {
    "today": number, 
    "yesterday": number, 
    "week": number, 
    "last_week": number, 
    "month": number,
    "last_month": number, 
    "year": number, 
    "last_year": number, 
    "today_percentage": number, 
    "week_percentage": number, 
    "month_percentage": number, 
    "year_percentage": number
  }

  constructor() {}

  ngOnInit(): void {}
}
