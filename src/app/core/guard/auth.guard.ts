import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { AuthState, selectorAuth } from '../auth/auth.reducer';
import { AppState } from '../models/app-state';

@Injectable()
export class AuthGuard implements CanActivate {
  displayWelcome: boolean;
  displayContent: boolean;
  isLoggedIn: boolean;
  constructor(private store: Store<AppState>, private router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      this.store.select(selectorAuth).subscribe(
        (authState: AuthState) => {
          this.isLoggedIn = authState.isAuthenticated;
          this.displayWelcome = authState.displayWelcome;
          this.displayContent = (this.isLoggedIn && !this.displayWelcome);
          if (!this.displayContent) {
            this.router.navigate(['/welcome']);
          }
        }
      )
    return this.displayContent;
  }
}
