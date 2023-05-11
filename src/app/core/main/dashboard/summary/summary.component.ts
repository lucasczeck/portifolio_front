import { Component, OnInit } from '@angular/core';

import { SummaryService } from './summary.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit{
  data: any = {}
  public Object = Object;
  
  constructor(private summaryService: SummaryService) {
    this.getSummary()
  }

  ngOnInit(): void {}

  getSummary(): void {
    this.summaryService.getSummary().subscribe((data) => this.data = data)
  }
}
