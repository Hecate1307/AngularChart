import { Component, OnInit } from '@angular/core';
import { Animals } from '../../data/animal';


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

  view: any[] = [930, 250];

  colorScheme = {
    domain: ['#FF8C00', '#FFA500', '#FFA07A', '#FF7F50', '#FF6347',
      '#FFA07A', '#FA8072', '#F08080', '#CD5C5C', '#B22222']
  };


  cardColor: string = '#FFFACD';

  onSelect(event) {
    console.log(event);
  }

  ngOnInit(): void {
  }

}
