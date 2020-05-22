import { Component, OnInit } from '@angular/core';
import {HttpClientService} from '../http-client.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-measurement',
  templateUrl: './measurement.component.html',
  styleUrls: ['./measurement.component.css']
})
export class MeasurementComponent implements OnInit {

  constructor(private service: HttpClientService, private router: Router) {
  }

  ngOnInit(): void {
  }
  doLogOut(){
    this.service.logOut();
    this.router.navigate(["/login"]);
  }
}
