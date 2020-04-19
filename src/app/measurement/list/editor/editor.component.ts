import {Component, OnInit} from '@angular/core';
import {Pomiar} from '../../measure';
import {HttpClientService} from '../../../http-client.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {

  constructor(private pomiarStorage: HttpClientService, private router: Router,
              private activeRoute: ActivatedRoute, private httpClient: HttpClientService) {
  }

  public pomiar: Pomiar = new Pomiar();


  ngOnInit(): void {
    this.getPomiarToEdit();
  }


  savePomiar(pomiar: Pomiar) {
    this.httpClient.savePomiar(pomiar).subscribe(r => {
      this.router.navigate(['/measur']);
    });
  }

  getPomiarToEdit() {
    this.activeRoute.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        // tslint:disable-next-line:radix
        this.httpClient.getPomiar(Number.parseInt(id)).subscribe(p => this.pomiar = p);
      }

    });
  }
}
