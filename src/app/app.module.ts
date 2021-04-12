import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NumberCardChartComponent } from './number-card-chart/number-card-chart.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BarChartsComponent } from './bar-charts/bar-charts.component';
import { LineAreaChartsComponent } from './line-area-charts/line-area-charts.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NumberCardChartComponent,
    BarChartsComponent,
    LineAreaChartsComponent
  ],
  imports: [
    BrowserModule,
    NgxChartsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
