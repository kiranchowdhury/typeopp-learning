import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { tap } from 'rxjs/operators/tap';

import { LocalStorageService } from '../local-storage/local-storage.service';

import { AUTH_KEY, AuthActionTypes, ActionAuthLogin,
        ActionAuthLoginSuccess, ActionAuthLoginUnauthorized,
        ActionAuthLoginError } from './auth.reducer';
import { LoginService } from './login.service';
import { distinctUntilChanged } from 'rxjs/operators/distinctUntilChanged';
import { debounceTime } from 'rxjs/operators/debounceTime';
import { switchMap } from 'rxjs/operators/switchMap';
import { map } from 'rxjs/operators/map';
import { LoginResponse } from '@app/core';
import { catchError } from 'rxjs/operators/catchError';
import { error } from 'util';
import { of } from 'rxjs/observable/of';
import { HttpErrorResponse } from '@angular/common/http/src/response';
import { Router } from '@angular/router';
import { ActionAuthSignIn, ActionAuthSignInSuccess, ActionAuthSignInFail } from './auth.reducer';
import { ActionAuthAuthorize,
        AuthorizeResponse, ActionAuthAuthorizeSuccess,
        ActionAuthAuthorizeError} from './auth.reducer';
import { ActionDsbLoadMyquotesCount } from '@app/dashboard/dashboard.reducer';





@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions<Action>,
    private localStorageService: LocalStorageService,
    private loginService: LoginService,
    private router: Router
  ) {}

  @Effect()
  authorize(): Observable<Action> {
    return this.actions$
      .ofType(AuthActionTypes.LOGIN_AUTHORIZE)
      .pipe(
        switchMap((action: ActionAuthAuthorize) =>
          this.loginService.authorize(action.payload)
          .pipe(
            tap((data: AuthorizeResponse) =>
                  this.localStorageService.setItem(AUTH_KEY,
                    {
                      selectedGroup: (data.status === '1') ? action.payload.selectedgroup
                         : this.localStorageService.getItem(AUTH_KEY).selectedGroup
                  })),
            map((data: AuthorizeResponse) => ((data.status === '1') ?
                        new ActionAuthAuthorizeSuccess({data}) :
                        new ActionAuthAuthorizeError({errorMessage: data.message})
                        )
          )
          ))
      );
  }

  @Effect({dispatch: false})
  authorizeSuccess(): Observable<any> {
    return this.actions$
      .ofType(AuthActionTypes.LOGIN_AUTHORIZE_SUCCESS)
      .pipe(
        tap((action) => this.router.navigate(['/searchquotes']))
       // map( () => new ActionDsbLoadMyquotesCount({apiid: 'manageQuote', methodName: 'getIBMQuoteSummary', query: 'summary'}))
      )
  }

  @Effect()
  signin(): Observable<Action> {
    return this.actions$
      .ofType(AuthActionTypes.AUTH_SIGNIN_IN)
      .pipe(
        switchMap((action: ActionAuthSignIn) =>
          this.loginService.signin(action.payload)
          .pipe(
            map((data) => (data.status  === '1' ?
            new ActionAuthSignInSuccess(data)
                        : new ActionAuthSignInFail({errorMessage: data.message}))
          )
          ))
      );
  }

  @Effect({dispatch: false})
  signInSuccess(): Observable<any> {
    return this.actions$
      .ofType(AuthActionTypes.AUTH_SIGN_IN_SUCCESS)
      .pipe(
        tap((action) => this.router.navigate(['/welcome']))
      )
  }

  @Effect()
  login(): Observable<Action> {
    return this.actions$
      .ofType(AuthActionTypes.LOGIN)
      .pipe(
        switchMap((action: ActionAuthLogin) =>
          this.loginService.login(action.payload)
          .pipe(
            tap((data: LoginResponse) =>
                  this.localStorageService.setItem(AUTH_KEY,
                    {
                    selectedGroup: this.getSelectedGroup(data)
                  })),
            map((data: LoginResponse) => (data.status  === '1' ?
            new ActionAuthLoginSuccess({data,
                        selectedGroupCode: this.localStorageService.getItem(AUTH_KEY).selectedGroup})
                        : new ActionAuthLoginUnauthorized({errorMessage: data.message}))
          )
          ))
      );
  }


  getSelectedGroup(data: LoginResponse): string {
      let group = '';
      if (this.localStorageService.getItem(AUTH_KEY) && this.localStorageService.getItem(AUTH_KEY).selectedGroup) {
        // first time access or storage was cleared
        group = this.localStorageService.getItem(AUTH_KEY).selectedGroup;
      } else {
          if (data.status === '1' && data.items) {
            group = data.items[0].selectedgroupcode;
          }
      }
      return group;
  }

  @Effect({ dispatch: false })
  logout(): Observable<Action> {
    return this.actions$
      .ofType(AuthActionTypes.LOGOUT)
      .pipe(
        tap(action =>
          // this.localStorageService.setItem(AUTH_KEY, { isAuthenticated: false })
          this.router.navigate(['/'])
        )
      );
  }
}
