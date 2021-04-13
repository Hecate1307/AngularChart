import { Component, OnInit } from '@angular/core';
import { Animals, Multi } from '../../data/animal';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit {
  Animals: any[];
  Multi: any[];

  view: any[] = [500, 350];
  view2: any[] = [900, 250];

  gradient: boolean = false;
  isDoughnut: boolean = true;

  showLegend: boolean = true;
  showLabels: boolean = true;

  animations: boolean = true;
  legendPosition: string = 'below';


  constructor() {
    Object.assign(this, { Animals, Multi });
  }

  colorScheme = {
    domain: ['#FF8C00', '#FFA500', '#FFA07A', '#FF7F50', '#FF6347',
      '#FFA07A', '#FA8072', '#F08080', '#CD5C5C', '#B22222']
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
