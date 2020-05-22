import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, RouterModule, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {HttpClientService} from '../http-client.service';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {
  activeStatus : boolean = false;
  constructor(private  auth : HttpClientService,  private router: Router) {
   this.activeStatus = auth.isLogged;
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.activeStatus;
    if(!this.activeStatus){
      this.router.navigate(["/login"])
    }
  }

}
