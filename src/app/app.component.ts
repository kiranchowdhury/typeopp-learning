import { Title } from '@angular/platform-browser';
import { OverlayContainer } from '@angular/cdk/overlay';
import { Component, HostBinding, OnDestroy, OnInit } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs/Subject';
import { takeUntil } from 'rxjs/operators/takeUntil';
import { map } from 'rxjs/operators/map';
import { filter } from 'rxjs/operators/filter';

import {
  // ActionAuthLogout,
  // ActionAuthLogin,
  // selectorAuth,
  routerTransition,
  // Group
} from '@app/core';
import { environment as env } from '@env/environment';

import { selectorSettings } from './settings';
// import { selectorAuth, AuthState, LoginResponseItem, LoginRequest } from './core/auth/auth.reducer';

import { Observable } from 'rxjs/Observable';
import { AppState } from '@app/models/state/app-state';
import { selectorAuth } from '@app/core/authentication/login.reducer';
import { AuthState } from '@app/models/state/auth-state';


@Component({
  selector: 'tl-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routerTransition]
})
export class AppComponent implements OnInit, OnDestroy {
  isAuthenticate: boolean;
  private unsubscribe$: Subject<void> = new Subject<void>();

  @HostBinding('class') componentCssClass;
  loggedin = false;
  isProd = env.production;
  envName = env.envName;
  version = env.versions.app;
  year = new Date().getFullYear();
  logo = require('../assets/logo_white_small.png');
  navigation = [
    {link: 'customers', label: 'Customer list'},
    {link: 'training', label: 'Training library'}
  ];
  navigationSideMenu = [
    ...this.navigation,
    { link: 'settings', label: 'Settings' }
  ];
  constructor(
   public overlayContainer: OverlayContainer,
   private store: Store<AppState>,
   private router: Router,
   private titleService: Title
  ) {}

  ngOnInit(): void {
    this.store
      .select(selectorSettings)
      .pipe(
        takeUntil(this.unsubscribe$),
        map(({ theme }) => theme.toLowerCase())
      )
      .subscribe(theme => {
        this.componentCssClass = theme;
        const classList = this.overlayContainer.getContainerElement().classList;
        const toRemove = Array.from(classList).filter((item: string) =>
          item.includes('-theme')
        );
        classList.remove(...toRemove);
        classList.add(theme);
      });
    this.router.events
      .pipe(
        takeUntil(this.unsubscribe$),
        filter(event => event instanceof ActivationEnd)
      )
      .subscribe((event: ActivationEnd) => {
        let lastChild = event.snapshot;
        while (lastChild.children.length) {
          lastChild = lastChild.children[0];
        }
        const { title } = lastChild.data;
        this.titleService.setTitle(
          title ? `${title} - ${env.appName}` : env.appName
        );
      });
      this.store.select(selectorAuth)
      .pipe(
        takeUntil(this.unsubscribe$),
      )
      .subscribe((authState: AuthState) => {
        this.loggedin = authState.loggedIn;
      })
  }

  handleSignIn() {
    console.log('navigatin form');
    this.loggedin = true;
  }

  handleSignUp() {
    console.log('navigating to signup form');
  }
  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  onLoginClick() {
    // this.store.dispatch(new ActionAuthLogin({apiid: 'getAuthGroup', methodname: 'getIBMAuthorizedGroup'}));
  }

  onLogoutClick() {
   // alert('Logging out...');
   // this.onLoginClick();
    // this.router.navigate(['/welcome']);
    // this.store.dispatch(new ActionAuthLogout());
  }
}
