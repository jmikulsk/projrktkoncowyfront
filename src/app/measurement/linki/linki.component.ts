import {Component, OnInit} from '@angular/core';
import {HttpClientService} from '../../http-client.service';

import {ActivatedRoute, Router} from '@angular/router';
import {Linki} from '../linki';

@Component({
  selector: 'app-linki',
  templateUrl: './linki.component.html',
  styleUrls: ['./linki.component.css']
})
export class LinkiComponent implements OnInit {

  constructor(private httpClient: HttpClientService) {
  }

  linki: Linki[] = [];


  ngOnInit(): void {

    this.getLinki();
  }

  getLinki() {
    this.httpClient.getLinki().subscribe(l => this.linki = l);
  }

  usunLinki(id: number) {
    this.httpClient.removeLink(id).subscribe(r => {
      this.getLinki();
    });
  }
}
