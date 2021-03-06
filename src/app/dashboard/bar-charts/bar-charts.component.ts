import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Animals, Multi } from '../../data/animal';

@Component({
  selector: 'app-bar-charts',
  templateUrl: './bar-charts.component.html',
  styleUrls: ['./bar-charts.component.scss'],
})
export class BarChartsComponent implements OnInit {
  Animals: any[];
  Multi: any[];
  constructor() {
    Object.assign(this, { Animals, Multi });
  }
  view: any[] = [460, 300];

  // options
  legendTitle: string = 'Animals';
  legendPosition: string = 'right'; // ['right', 'below']
  legend: boolean = false;

  xAxis: boolean = true;
  yAxis: boolean = true;

  yAxisLabel: string = 'Population';
  xAxisLabel: string = 'Animals';
  showXAxisLabel: boolean = true;
  showYAxisLabel: boolean = true;

  maxXAxisTickLength: number = 2;
  maxYAxisTickLength: number = 10;
  trimXAxisTicks: boolean = true;
  trimYAxisTicks: boolean = false;
  rotateXAxisTicks: boolean = true;

  xAxisTicks: any[] = []
  yAxisTicks: any[] = []

  animations: boolean = true; // animations on load

  showGridLines: boolean = true; // grid lines

  showDataLabel: boolean = false; // numbers on bars

  gradient: boolean = false;

  colorScheme = {
    domain: ['#FF8C00', '#FFA500', '#FFA07A', '#FF7F50', '#FF6347',
      '#FFA07A', '#FA8072', '#F08080', '#CD5C5C', '#B22222']
  };

  schemeType: string = 'ordinal'; // 'ordinal' or 'linear'

  activeEntries: any[] = []
  barPadding: number = 10
  tooltipDisabled: boolean = false;

  yScaleMax: number = 80000000;

  roundEdges: boolean = true;


  ngOnInit(): void {
  }

  onSelect(event: any) {
    console.log(event);
  }

  onActivate(data: any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

  formatString(input: string): string {
    return input.toUpperCase();
  }

  formatNumber(input: number): string {
    let res = input / 10000;
    return res < 1 ? input.toString() : res.toString() + "w";
  }

}
