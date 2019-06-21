import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CommonService } from './services/common.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router : Router, private commonService: CommonService){

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      console.log("checking if user is authenticatd");
      /* 
        For authentication wen can use JWT bsed authentication.
        Just add jwt module
        npm install --save @auth0/angular-jwt

        const token = localStorage.getItem('token');
        // Check whether the token is expired and return
        // true or false
        return !this.jwtHelper.isTokenExpired(token);
      */
      if(!this.commonService.isAuthenticated){
        alert("Not validated. You will be redirected to fundamental analysis");
        this.router.navigate(['fundamental']);
      }
      return this.commonService.isAuthenticated;
  }
  
}
