import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {IntroductionComponent} from './introduction/introduction.component';
import {MeasurementComponent} from './measurement/measurement.component';
import {ListComponent} from './measurement/list/list.component';
import {ChartComponent} from './measurement/chart/chart.component';
import {EditorComponent} from './measurement/list/editor/editor.component';
import {ChartWComponent} from './measurement/chart-w/chart-w.component';
import {LoginComponent} from './measurement/login/login.component';


const routes: Routes = [

  { path: '', redirectTo:"login",pathMatch:"full"},
  {path: 'measur' , component: MeasurementComponent , children:[
      {path: 'list' , component: ListComponent},
      {path: 'chart', component: ChartComponent},
      {path: 'chartW', component: ChartWComponent},
      {path: 'list/edit', component: EditorComponent},
      {path: 'list/edit/:id', component: EditorComponent}
    ]},
  {path: 'login',  component: LoginComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
