import {Component, OnInit, ViewChild} from '@angular/core';
import {Chart} from 'chart.js';
import {HttpClientService} from '../../http-client.service';
import {Pomiar} from '../measure';
import {ActivatedRoute, Data} from '@angular/router';

@Component({
  selector: 'app-chart-w',
  templateUrl: './chart-w.component.html',
  styleUrls: ['./chart-w.component.css']
})
export class ChartWComponent implements OnInit {
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
        labels:[this.pomiary[324].godzina, this.pomiary[312].godzina, this.pomiary[300].godzina, this.pomiary[288].godzina, this.pomiary[276].godzina, this.pomiary[264].godzina,
          this.pomiary[252].godzina,  this.pomiary[240].godzina, [this.pomiary[228].godzina, this.pomiary[216].godzina, this.pomiary[204].godzina, this.pomiary[192].godzina,
            this.pomiary[180].godzina, this.pomiary[168].godzina, this.pomiary[156].godzina, this.pomiary[144].godzina, this.pomiary[132].godzina, this.pomiary[120].godzina,
            this.pomiary[108].godzina, this.pomiary[96].godzina,  this.pomiary[84].godzina, this.pomiary[72].godzina, this.pomiary[60].godzina, this.pomiary[48].godzina],
            this.pomiary[36].godzina,  this.pomiary[24].godzina,  this.pomiary[12].godzina, this.pomiary[1].godzina],
        datasets: [{
          label: 'TEMPERATURA Tydzień',
          data: [this.pomiary[324].temperatura, this.pomiary[312].temperatura, this.pomiary[300].temperatura, this.pomiary[288].temperatura, this.pomiary[276].temperatura, this.pomiary[264].temperatura,
            this.pomiary[252].temperatura,  this.pomiary[240].temperatura, [this.pomiary[228].temperatura, this.pomiary[216].temperatura, this.pomiary[204].temperatura, this.pomiary[192].temperatura,
              this.pomiary[180].temperatura, this.pomiary[168].temperatura, this.pomiary[156].temperatura, this.pomiary[144].temperatura, this.pomiary[132].temperatura, this.pomiary[120].temperatura,
              this.pomiary[108].temperatura, this.pomiary[96].temperatura,  this.pomiary[84].temperatura, this.pomiary[72].temperatura, this.pomiary[60].temperatura, this.pomiary[48].temperatura],
            this.pomiary[36].temperatura,  this.pomiary[24].temperatura,  this.pomiary[12].temperatura, this.pomiary[1].temperatura],
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
        labels:[this.pomiary[324].godzina, this.pomiary[312].godzina, this.pomiary[300].godzina, this.pomiary[288].godzina, this.pomiary[276].godzina, this.pomiary[264].godzina,
          this.pomiary[252].godzina,  this.pomiary[240].godzina, [this.pomiary[228].godzina, this.pomiary[216].godzina, this.pomiary[204].godzina, this.pomiary[192].godzina,
            this.pomiary[180].godzina, this.pomiary[168].godzina, this.pomiary[156].godzina, this.pomiary[144].godzina, this.pomiary[132].godzina, this.pomiary[120].godzina,
            this.pomiary[108].godzina, this.pomiary[96].godzina,  this.pomiary[84].godzina, this.pomiary[72].godzina, this.pomiary[60].godzina, this.pomiary[48].godzina],
          this.pomiary[36].godzina,  this.pomiary[24].godzina,  this.pomiary[12].godzina, this.pomiary[1].godzina],
        datasets: [{
          label: 'TEMPERATURA Tydzień',
          data: [this.pomiary[324].wilgotnosc, this.pomiary[312].wilgotnosc, this.pomiary[300].wilgotnosc, this.pomiary[288].wilgotnosc, this.pomiary[276].wilgotnosc, this.pomiary[264].wilgotnosc,
            this.pomiary[252].wilgotnosc,  this.pomiary[240].wilgotnosc, [this.pomiary[228].wilgotnosc, this.pomiary[216].wilgotnosc, this.pomiary[204].wilgotnosc, this.pomiary[192].wilgotnosc,
              this.pomiary[180].wilgotnosc, this.pomiary[168].wilgotnosc, this.pomiary[156].wilgotnosc, this.pomiary[144].wilgotnosc, this.pomiary[132].wilgotnosc, this.pomiary[120].wilgotnosc,
              this.pomiary[108].wilgotnosc, this.pomiary[96].wilgotnosc,  this.pomiary[84].wilgotnosc, this.pomiary[72].wilgotnosc, this.pomiary[60].wilgotnosc, this.pomiary[48].wilgotnosc],
            this.pomiary[36].wilgotnosc,  this.pomiary[24].wilgotnosc,  this.pomiary[12].wilgotnosc, this.pomiary[1].wilgotnosc],
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
