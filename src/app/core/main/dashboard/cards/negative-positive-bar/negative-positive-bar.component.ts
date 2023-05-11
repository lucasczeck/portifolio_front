import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-negative-positive-bar',
  templateUrl: './negative-positive-bar.component.html',
  styleUrls: ['./negative-positive-bar.component.css']
})
export class NegativePositiveBarComponent implements OnInit {
  @Input() percentage: number = 0;

  bgColor: string = '';
  bgWidth: number = 0;
  signal: string = '';
  teste: number = 0;
  negative: boolean = true;

  ngOnInit(): void {
    this.calculateValues();
  }

  private calculateValues(): void {
    this.bgColor = this.percentage < 0 ? 'red' : 'green';
    this.bgWidth = this.percentage > 0 ? this.percentage : (this.percentage * -1);
    this.signal = this.percentage > 0 ? '+' : '';
    this.teste = this.bgWidth;
    this.negative = this.percentage > 0 ? false : true;
  }
}
