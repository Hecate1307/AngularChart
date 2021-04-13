import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BarChartsComponent } from './bar-charts/bar-charts.component';
import { DashboardComponent } from './dashboard.component';
import { LineAreaChartsComponent } from './line-area-charts/line-area-charts.component';
import { NumberCardChartComponent } from './number-card-chart/number-card-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';

const routes: Routes = [
    { path: '', component: DashboardComponent },
];
@NgModule({
    declarations: [
        NumberCardChartComponent,
        BarChartsComponent,
        LineAreaChartsComponent,
        PieChartComponent,
        DashboardComponent,
    ],
    imports: [
        // BrowserModule,
        NgxChartsModule,
        // BrowserAnimationsModule,
        RouterModule.forChild(routes)
    ],
    exports: [
        NumberCardChartComponent,
        BarChartsComponent,
        LineAreaChartsComponent,
        PieChartComponent,
        DashboardComponent,
    ]
})
export class DashboardModule { }
