import { Component, OnInit } from '@angular/core';
import { Animals, Multi } from '../data/animal';

@Component({
  selector: 'app-line-area-charts',
  templateUrl: './line-area-charts.component.html',
  styleUrls: ['./line-area-charts.component.scss']
})
export class LineAreaChartsComponent implements OnInit {
  Animals: any[];
  Multi: any[];
  constructor() {
    Object.assign(this, { Animals, Multi });
  }

  view: any[] = [460, 300];

  colorScheme = {
    domain: ['#FF8C00', '#FFA500', '#FFA07A', '#FF7F50', '#FF6347']
  };

  legend: boolean = true;
  legendTitle: string = 'Animals';
  legendPosition: string = "below";

  showLabels: boolean = true;

  xAxis: boolean = true;
  yAxis: boolean = true;

  yAxisLabel: string = 'Population';
  xAxisLabel: string = 'Animals';
  showXAxisLabel: boolean = true;
  showYAxisLabel: boolean = true;

  timeline: boolean = true;

  animations: boolean = true;

  ngOnInit(): void {
  }

}
