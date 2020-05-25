import { Component, OnInit } from '@angular/core';
import {HttpClientService} from '../http-client.service';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.css']
})
export class IntroductionComponent implements OnInit {

  constructor(private service: HttpClientService) { }

  ngOnInit(): void {
  }

}
