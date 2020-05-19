import {Component, OnInit, ViewChild} from '@angular/core';
import {Chart} from 'chart.js';
import {HttpClientService} from '../../http-client.service';
import {Pomiar} from '../measure';
import {ActivatedRoute, Data} from '@angular/router';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css'],
})
export class ChartComponent implements OnInit {
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
    var ctx = document.getElementById('myChart');
    var myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: [this.pomiary[44].godzina, this.pomiary[40].godzina, this.pomiary[36].godzina, this.pomiary[32].godzina,  this.pomiary[28].godzina,
          this.pomiary[24].godzina, this.pomiary[20].godzina, this.pomiary[16].godzina,  this.pomiary[12].godzina,  this.pomiary[8].godzina,  this.pomiary[4].godzina,
          this.pomiary[0].godzina],
        datasets: [{
          label: 'TEMPERATURA 24h',
          data: [this.pomiary[44].temperatura, this.pomiary[40].temperatura, this.pomiary[36].temperatura, this.pomiary[32].temperatura,
            this.pomiary[28].temperatura, this.pomiary[24].temperatura, this.pomiary[20].temperatura, this.pomiary[16].temperatura, this.pomiary[12].temperatura ,
            this.pomiary[8].temperatura, this.pomiary[4].temperatura, this.pomiary[0].temperatura],
          backgroundColor: [
            'rgba(54, 162, 235, 0.3)',

          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',


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

    var ctx = document.getElementById('myChartW');
    var myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: [this.pomiary[44].godzina, this.pomiary[40].godzina, this.pomiary[36].godzina, this.pomiary[32].godzina,  this.pomiary[28].godzina,
          this.pomiary[24].godzina, this.pomiary[20].godzina, this.pomiary[16].godzina,  this.pomiary[12].godzina,  this.pomiary[8].godzina,  this.pomiary[4].godzina,
          this.pomiary[0].godzina],
        datasets: [{
          label: 'WILGOTNOŚĆ 24h',
          data: [this.pomiary[44].wilgotnosc, this.pomiary[40].wilgotnosc, this.pomiary[36].wilgotnosc, this.pomiary[32].wilgotnosc, this.pomiary[28].wilgotnosc,
            this.pomiary[24].wilgotnosc, this.pomiary[20].wilgotnosc, this.pomiary[16].temperatura, this.pomiary[12].temperatura , this.pomiary[8].wilgotnosc,
            this.pomiary[4].wilgotnosc, this.pomiary[0].wilgotnosc],
          backgroundColor: [
            'rgba(235,156,37,0.3)',

          ],
          borderColor: [
            'rgb(25,255,108)',


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
