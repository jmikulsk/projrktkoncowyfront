import {Component, OnInit, ViewChild} from '@angular/core';
import {Chart} from 'chart.js';
import {HttpClientService} from '../../http-client.service';
import {Pomiar} from '../measure';
import {ActivatedRoute, Data} from '@angular/router';
@Component({
  selector: 'app-chart-all',
  templateUrl: './chart-all.component.html',
  styles: []
})
export class ChartAllComponent implements OnInit {

  constructor(private httpClient: HttpClientService, private activeRoute: ActivatedRoute) {
  }

  public name = 'Angular   6';
  public canvas: any;
  public ctx: any;
  @ViewChild('mychart') public mychart;
  public pomiary: Pomiar[] = [];
  public pon: Pomiar = new Pomiar();
  public test: number;
  public data: Data;

  public ngOnInit(): void {


    this.getPomiary();
    this.ngAfterViewInit()


  }

  public ngAfterViewInit() {
    var ctx = document.getElementById('myChartA');
    var myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels:[this.pomiary[this.pomiary.length-2].data, this.pomiary[(this.pomiary.length-500)].data,this.pomiary[1000].data,this.pomiary[500].data,this.pomiary[1].data],

        datasets: [{
          label: 'TEMPERATURA Całość',
         data: [this.pomiary[this.pomiary.length-2].temperatura, this.pomiary[(this.pomiary.length-500)].temperatura,this.pomiary[1000].temperatura,this.pomiary[500].temperatura,this.pomiary[1].temperatura],
          backgroundColor: [
            'rgba(93,28,235,0.3)',

          ],
          borderColor: [
            'rgb(255,48,0)',


          ],
          borderWidth: 3
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              userCallback: function (tick) {

                return tick.toString() + '°C';
              },
              beginAtZero: true,
            }
          }]
        }
      }
    });

    var ctx = document.getElementById('myChartB');
    var myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels:[this.pomiary[this.pomiary.length-2].data, this.pomiary[(this.pomiary.length-500)].data,this.pomiary[1000].data,this.pomiary[500].data,this.pomiary[1].data],

        datasets: [{
          label: 'Wilgotność Całość',
          data: [this.pomiary[this.pomiary.length-2].wilgotnosc, this.pomiary[(this.pomiary.length-500)].wilgotnosc,this.pomiary[1000].wilgotnosc,this.pomiary[500].wilgotnosc,this.pomiary[1].wilgotnosc],
          backgroundColor: [
            'rgba(235,231,0,0.3)',

          ],
          borderColor: [
            'rgb(8,20,255)',


          ],
          borderWidth: 3
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              userCallback: function (tick) {

                return tick.toString() + '%';
              },
              beginAtZero: true,
            },
          }]
        }
      }
    });
  }

  public getPomiary() {
    this.httpClient.getPomiary().subscribe((p) => this.pomiary = p);
  }

  public getPomiar() {
    this.activeRoute.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        // tslint:disable-next-line:radix
        this.httpClient.getPomiar(Number.parseInt(id)).subscribe(p => this.pon = p);
      }

    });
  }


}
