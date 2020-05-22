import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {IntroductionComponent} from './introduction/introduction.component';
import {MeasurementComponent} from './measurement/measurement.component';
import {ListComponent} from './measurement/list/list.component';
import {ChartComponent} from './measurement/chart/chart.component';
import {EditorComponent} from './measurement/list/editorL/editor.component';
import {ChartWComponent} from './measurement/chart-w/chart-w.component';
import {LoginComponent} from './measurement/login/login.component';
import {AuthGuard} from './measurement/auth.guard';
import {LinkiComponent} from './measurement/linki/linki.component';
import {EditorLinkiComponent} from './measurement/linki/editor-linki/editor-linki.component';


const routes: Routes = [

  { path: '', redirectTo:"login",pathMatch:"full"},
  {path: 'measur' , canActivate : [AuthGuard], component: MeasurementComponent , children:[
      {path: 'list' , component: ListComponent},
      {path: 'chart', component: ChartComponent},
      {path: 'chartW', component: ChartWComponent},
      {path: 'list/edit', component: EditorComponent},
      {path: 'list/edit/:id', component: EditorComponent},
      {path: 'listL' , component: LinkiComponent},
      {path: 'listL/edit', component: EditorLinkiComponent},
      {path: 'listL/edit/:id', component: EditorLinkiComponent}
    ]},
  {path: 'login',  component: LoginComponent},

]


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
