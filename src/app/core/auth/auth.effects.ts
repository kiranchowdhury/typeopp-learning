import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { tap } from 'rxjs/operators/tap';

import { LocalStorageService } from '../local-storage/local-storage.service';

import { AUTH_KEY, AuthActionTypes} from './auth.reducer';
import { distinctUntilChanged } from 'rxjs/operators/distinctUntilChanged';
import { debounceTime } from 'rxjs/operators/debounceTime';
import { switchMap } from 'rxjs/operators/switchMap';
import { map } from 'rxjs/operators/map';
import { catchError } from 'rxjs/operators/catchError';
import { error } from 'util';
import { of } from 'rxjs/observable/of';
import { HttpErrorResponse } from '@angular/common/http/src/response';
import { Router } from '@angular/router';
import { ActionAuthSignIn, ActionAuthSignInSuccess, ActionAuthSignInFail } from './auth.reducer';
import { LoginService } from '@app/core/auth/login.service';
import { LoginResponse } from '@app/core/auth/login-response';
import { MessageCodes } from '@app/common/message-codes.enum';







@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions<Action>,
    private localStorageService: LocalStorageService,
    private loginService: LoginService,
    private router: Router
  ) {}

  @Effect()
  login(): Observable<Action> {
    console.log('Log in effect called');
    return this.actions$
      .ofType(AuthActionTypes.AUTH_SIGNIN_IN)
      .pipe(
        switchMap((action: ActionAuthSignIn) =>
          this.loginService.login(action.payload)
          .pipe(
            tap((data: LoginResponse) => this.log(data)),
            map((data: LoginResponse) => ((data.success) ?
                        new ActionAuthSignInSuccess(data) :
                        new ActionAuthSignInFail({errorMessage: MessageCodes.TL_USER_NOT_FOUND})
                        )
          )
          ))
      );
  }
  log(data) {
    console.log(data);
    return data;
  }
  @Effect({dispatch: false})
  signInSuccess(): Observable<any> {
    return this.actions$
      .ofType(AuthActionTypes.AUTH_SIGN_IN_SUCCESS)
      .pipe(
        tap((action) => this.router.navigate(['/customers']))
      )
  }
}
