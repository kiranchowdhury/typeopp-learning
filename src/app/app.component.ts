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

  isProd = env.production;
  envName = env.envName;
  version = env.versions.app;
  year = new Date().getFullYear();
  logo = require('../assets/logo_white_small.png');
  isGroupSelected = false;
  navigation = [
    // { link: 'dashboard', label: 'Dashboard' },
    // { link: 'myquotes', label: 'My Quotes' },
    // { link: 'searchquotes', label: 'Search Quotes' },
    // {link: 'managequotes', label: 'Create Quotes'},
    // { link: 'managequotes', label: 'Manage Quotes' },
    // { link: 'assignbackup', label: 'Assign Backup' },
    {link: 'customers', label: 'Customer list'},
    {link: 'training', label: 'Training library'}
  ];
  navigationSideMenu = [
    ...this.navigation,
    { link: 'settings', label: 'Settings' }
  ];
  displayWelcome = true;
  initialized = false;
  loginPayLoad: any;
  constructor(
    public overlayContainer: OverlayContainer,
   // private store: Store<any>,
    private router: Router,
    private titleService: Title
  ) {}

  ngOnInit(): void {
  //  console.log('I am called 2nd');
  //   this.store
  //     .select(selectorSettings)
  //     .pipe(
  //       takeUntil(this.unsubscribe$),
  //       map(({ theme }) => theme.toLowerCase())
  //     )
  //     .subscribe(theme => {
  //       this.componentCssClass = theme;
  //       const classList = this.overlayContainer.getContainerElement().classList;
  //       const toRemove = Array.from(classList).filter((item: string) =>
  //         item.includes('-theme')
  //       );
  //       classList.remove(...toRemove);
  //       classList.add(theme);
  //     });
  //   this.router.events
  //     .pipe(
  //       takeUntil(this.unsubscribe$),
  //       filter(event => event instanceof ActivationEnd)
  //     )
  //     .subscribe((event: ActivationEnd) => {
  //       let lastChild = event.snapshot;
  //       while (lastChild.children.length) {
  //         lastChild = lastChild.children[0];
  //       }
  //       const { title } = lastChild.data;
  //       this.titleService.setTitle(
  //         title ? `${title} - ${env.appName}` : env.appName
  //       );
  //     });
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
