import { Component, OnInit } from '@angular/core';
import { Animals } from '../data/animal';


@Component({
  selector: 'app-number-card-chart',
  templateUrl: './number-card-chart.component.html',
  styleUrls: ['./number-card-chart.component.scss']
})
export class NumberCardChartComponent implements OnInit {

  Animals: any[];

  constructor() {
    Object.assign(this, { Animals });
  }

  view: any[] = [700, 350];
  colorScheme = {
    domain: ['#FF8C00', '#FFA500', '#FFA07A', '#FF7F50', '#FF6347']
  };

  cardColor: string = '#FFFACD';

  onSelect(event) {
    console.log(event);
  }

  ngOnInit(): void {
  }

}
