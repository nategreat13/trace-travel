import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from '../services/auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): Observable<boolean | UrlTree> {
    return this.authService.user$.pipe(
      map((user) => {
        if (user) {
          // Redirect to the desired route if the user is logged in
          return this.router.createUrlTree(['/member/your-deals']);
        }
        return true; // Allow access if not logged in
      })
    );
  }
}
