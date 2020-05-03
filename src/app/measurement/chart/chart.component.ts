import {Component, OnInit, ViewChild} from '@angular/core';
import { Chart } from 'chart.js';
import {HttpClientService} from '../../http-client.service';
import {Pomiar} from '../measure';
import {Data} from '@angular/router';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css'],
})
export class ChartComponent implements OnInit {
  constructor(private httpClient: HttpClientService) { }

  public name = 'Angular   6';
  public canvas: any;
  public ctx: any;
  @ViewChild('mychart') public mychart;
  public pomiary: Pomiar[] = [];
  public test: number;
  public data: new Data;

  public ngOnInit(): void {


    this.getPomiary();
    this.test = this.pomiary[100].id;
    console.log(this.test);
    
  }

  public ngAfterViewInit() {
    this.canvas = this.mychart.nativeElement;
    this.ctx = this.canvas.getContext('2d');

    const myChart = new Chart(this.ctx, {
      type: 'line',

      data: {
        datasets: [{
          label: 'Temperatura',
          backgroundColor: 'rgba(255, 99, 132,0.4)',
          borderColor: 'rgb(255,222,37)',
          fill: true,
          data: [
            {x: new Date (1996,11,10,3,4,5), y: this.pomiary[this.pomiary.length - 200].temperatura},
            {x:  new Date(1996,11,11,3,4,5), y: this.pomiary[this.pomiary.length - 99].temperatura},
            {x:  this.pomiary[334].data, y: this.pomiary[this.pomiary.length - 98].temperatura},
            // {x: this.pomiary[this.pomiary.length-97].id, y: this.pomiary[this.pomiary.length-9].temperatura},
            // {x: this.pomiary[this.pomiary.length-96].id, y: this.pomiary[this.pomiary.length-96].temperatura},
            // {x: this.pomiary[this.pomiary.length-95].id, y: this.pomiary[this.pomiary.length-95].temperatura},
            // {x: this.pomiary[this.pomiary.length-94].id, y: this.pomiary[this.pomiary.length-94].temperatura},
            // {x: this.pomiary[this.pomiary.length-93].id, y: this.pomiary[this.pomiary.length-93].temperatura},
            // {x: this.pomiary[this.pomiary.length-92].id, y: this.pomiary[this.pomiary.length-92].temperatura},
            // {x: this.pomiary[this.pomiary.length - 91].id, y: this.pomiary[this.pomiary.length - 91].temperatura},

            //             // {x: 3000, y: 5},
            //             // {x: 3400, y: 4.75},
            //             // {x: 3600, y: 4.75},
            //             // {x: 5200, y: 6},
            //             // {x: 6000, y: 9},
            //             // {x: 7222, y: 10},
          ],
        }],
      },
      options: {
        responsive: true,
        title: {
          display: true,
          text: 'Temperatura',
        },
        scales: {
          xAxes: [{
            type: 'string',
            time: {
              displayFormats: {
                quarter :'DD MMM YYYY'
              }
            },
            position: 'bottom',

            // ticks: {
            //   userCallback: function() {
            //
            //     return 'dupa';
            // //   }
            // },
            scaleLabel: {
              labelString: 'Data',
              display: true,
            },
          }],
          yAxes: [{
            type: 'linear',
            // ticks: {
            //   userCallback: function(tick) {
            //     return tick.toString() + 'm';
            //   }
            // },
            scaleLabel: {
              labelString: 'Temperatura Celcjusze',
              display: true,
            },
          }],
        },
      },
    });
  }

  public getPomiary() {
    this.httpClient.getPomiary().subscribe((p) => this.pomiary = p);
  }

}
