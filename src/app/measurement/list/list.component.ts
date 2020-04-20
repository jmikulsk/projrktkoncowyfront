import {Component, OnInit} from '@angular/core';
import {HttpClientService} from '../../http-client.service';
import {Pomiar} from '../measure';
import {sortTasksByPriority} from '@angular/compiler-cli/ngcc/src/execution/tasks/utils';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private httpClient: HttpClientService) {
  }

  pomiary: Pomiar[] = [];


  ngOnInit(): void {


    this.getPomiary();

  }

  getPomiary() {
    this.httpClient.getPomiary().subscribe(p => this.pomiary = p);
    }


}
