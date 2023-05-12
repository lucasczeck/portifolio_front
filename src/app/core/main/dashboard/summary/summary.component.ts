import { Component, OnInit } from '@angular/core';

import { SummaryService } from './summary.service';

import { Summary } from 'src/app/Interfaces/Summary';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit{
  data!: Summary
  
  constructor(private summaryService: SummaryService) {}

  ngOnInit(): void {
    this.getSummary()
  }

  getSummary(): void {
    this.summaryService.getSummary().subscribe((data) => this.data = data)
  }
}
