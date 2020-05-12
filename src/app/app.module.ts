import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';
import { IntroductionComponent } from './introduction/introduction.component';
import { MeasurementComponent } from './measurement/measurement.component';
import { ListComponent } from './measurement/list/list.component';
import { ChartComponent } from './measurement/chart/chart.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { EditorComponent } from './measurement/list/editor/editor.component';
import { ChartWComponent } from './measurement/chart-w/chart-w.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroductionComponent,
    MeasurementComponent,
    ListComponent,
    ChartComponent,
    EditorComponent,
    ChartWComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
