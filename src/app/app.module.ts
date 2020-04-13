import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';
import { IntroductionComponent } from './introduction/introduction.component';
import { MeasurementComponent } from './measurement/measurement.component';
import { ListComponent } from './measurement/list/list.component';
import { ChartComponent } from './measurement/chart/chart.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroductionComponent,
    MeasurementComponent,
    ListComponent,
    ChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
