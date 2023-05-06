import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  data = {
    "projects": {
      "personal": {
        "finalized": {"value": 1, "percentage": 100.0}, 
        "development": {"value": 0, "percentage": 0.0}, 
        "published": {"value": 0, "percentage": 0.0}}, 
      "professional": {
        "finalized": {"value": 0, "percentage": 0.0}, 
        "development": {"value": 0, "percentage": 0.0}, 
        "published": {"value": 0, "percentage": 0.0}}}, 
    "commits": {
      "today": 4, 
      "yesterday": 0, 
      "week": 5, 
      "last_week": 10, 
      "month": 5,
      "last_month": 25, 
      "year": 52, 
      "last_year": 24, 
      "today_percentage": 100.0, 
      "week_percentage": -50.0, 
      "month_percentage": -80.0, 
      "year_percentage": 116.67}}
      
  constructor() {}

  ngOnInit(): void {}

}
