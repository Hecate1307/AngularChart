import { Component, OnInit } from '@angular/core';
import { Animals, Multi } from '../data/animal';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit {
  Animals: any[];
  Multi: any[];

  view: any[] = [520, 200];
  view2: any[] = [550, 400];

  gradient: boolean = false;
  isDoughnut: boolean = true;

  showLegend: boolean = true;
  showLabels: boolean = true;

  legendPosition: string = 'below';


  constructor() {
    Object.assign(this, { Animals, Multi });
  }

  colorScheme = {
    domain: ['#FF8C00', '#FFA500', '#FFA07A', '#FF7F50', '#FF6347']
  };

  onSelect(data): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }
  onActivate(data): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

  ngOnInit(): void {
  }

}
