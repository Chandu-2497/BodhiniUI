import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Injectable({
    providedIn: 'root',
}
)
export class AuthGuard implements CanActivate {

    constructor(private router: Router,
        private authService: AuthService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

        if (!this.authService.isTokenExpired() || localStorage.getItem('currentUser')) {
            return true;
          }
      
          this.router.navigate(['/login']);
          return false;
    }

    
}