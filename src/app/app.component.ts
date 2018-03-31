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
  ActionAuthLogout,
  ActionAuthLogin,
  // selectorAuth,
  routerTransition,
  Group
} from '@app/core';
import { environment as env } from '@env/environment';

import { selectorSettings } from './settings';
import { AppState } from './core/models/app-state';
import { selectorAuth, AuthState, LoginResponseItem, LoginRequest } from './core/auth/auth.reducer';
import { ApiInfo } from './core/models/api-info';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'anms-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routerTransition]
})
export class AppComponent implements OnInit, OnDestroy {
  isAuthenticate: boolean;
  private unsubscribe$: Subject<void> = new Subject<void>();

  @HostBinding('class') componentCssClass;

  isProd = env.production;
  envName = env.envName;
  version = env.versions.app;
  year = new Date().getFullYear();
  logo = require('../assets/logo_white_small.png');
  isGroupSelected = false;
  navigation = [
    // { link: 'dashboard', label: 'Dashboard' },
    // { link: 'myquotes', label: 'My Quotes' },
    { link: 'searchquotes', label: 'Search Quotes' },
    {link: 'managequotes', label: 'Create Quotes'},
    { link: 'managequotes', label: 'Manage Quotes' },
    { link: 'assignbackup', label: 'Assign Backup' },
  ];
  navigationSideMenu = [
    ...this.navigation,
    { link: 'settings', label: 'Settings' }
  ];
  displayWelcome = true;
  initialized = false;
  loginPayLoad: LoginRequest;
  constructor(
    public overlayContainer: OverlayContainer,
    private store: Store<AppState>,
    private router: Router,
    private titleService: Title
  ) {}

  ngOnInit(): void {
   console.log('I am called 2nd');
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
      this.store
      .select(selectorAuth)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((authState: AuthState) => {
          if (authState.displayWelcome === undefined) {
            this.displayWelcome = true;
          } else {
            this.displayWelcome = authState.displayWelcome;
          }
          this.isAuthenticate = authState.isAuthenticated;
          console.log('authState is ', authState);
          // if (!this.initialized) {
          //   this.loginPayLoad = {apiid: 'getAuthGroup', methodname: 'getIBMAuthorizedGroup'};
          //   this.initialized = true;
          //   this.store.dispatch(new ActionAuthLogin(this.loginPayLoad));
          // }
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
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  onLoginClick() {
    this.store.dispatch(new ActionAuthLogin({apiid: 'getAuthGroup', methodname: 'getIBMAuthorizedGroup'}));
  }

  onLogoutClick() {
   // alert('Logging out...');
   // this.onLoginClick();
    // this.router.navigate(['/welcome']);
    this.store.dispatch(new ActionAuthLogout());
  }
}
