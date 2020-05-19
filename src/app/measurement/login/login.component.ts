import {Component, OnInit} from '@angular/core';
import {HttpClientService} from '../../http-client.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;


  constructor(private service: HttpClientService, private router: Router) {
  }

  ngOnInit(): void {
  }

  doLogin() {
   let resp= this.service.login(this.username, this.password);
    resp.subscribe(data => {
      this.router.navigate(["/measur/list"])
    });

  }

}
