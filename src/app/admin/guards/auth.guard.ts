import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    if (this.isAuthenticated()) {
      return true;
    } else {
      return this.router.createUrlTree(['/admin/login']);
    }
  }

  private isAuthenticated(): boolean {
    if(localStorage.getItem('token') !== null) {
      return true
    } else {
      return false
    }
  }
}
