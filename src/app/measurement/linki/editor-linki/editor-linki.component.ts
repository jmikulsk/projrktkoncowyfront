import { Component, OnInit } from '@angular/core';
import {HttpClientService} from '../../../http-client.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Linki} from '../../linki';

@Component({
  selector: 'app-editor-linki',
  templateUrl: './editor-linki.component.html',
  styleUrls: ['./editor-linki.component.css']
})
export class EditorLinkiComponent implements OnInit {

  constructor(private pomiarStorage: HttpClientService, private router: Router,
              private activeRoute: ActivatedRoute, private httpClient: HttpClientService) {
  }
  public link: Linki = new Linki();

  ngOnInit(): void {
    this.getLinkToEdit();
  }
  saveLinki(link: Linki) {
    this.httpClient.saveLinki(link).subscribe(r => {
      this.router.navigate(['/measur/listL']);
    });
  }
  getLinkToEdit() {
    this.activeRoute.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        // tslint:disable-next-line:radix
        this.httpClient.getLink(Number.parseInt(id)).subscribe(l => this.link = l);
      }

    });
  }

}
