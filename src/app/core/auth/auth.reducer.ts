import { Action } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';
import { AuthState } from '@app/models/state/auth-state';
import { AppState } from '@app/models/state/app-state';
import { LoginResponse } from '@app/core/auth/login-response';
// // import { ApiInfo } from '@app/core/models/api-info';
// import { LocalStorageService } from '@app/core';




export const AUTH_KEY = 'AUTH';

export enum AuthActionTypes {
  AUTH_SIGNIN_IN = '[Auth] Sign In',
  AUTH_SIGN_IN_SUCCESS = '[Auth] Sign In Success',
  AUTH_SIGN_IN_FAIL = '[Auth] Sign In Fail'
}

export class ActionAuthSignIn implements Action {
  readonly type = AuthActionTypes.AUTH_SIGNIN_IN;
  constructor(public payload: {username: string, password: string}) {}
}


export class ActionAuthSignInSuccess implements Action {
  readonly type = AuthActionTypes.AUTH_SIGN_IN_SUCCESS;
  constructor(public payload: LoginResponse) {}
}

export class ActionAuthSignInFail implements Action {
  readonly type = AuthActionTypes.AUTH_SIGN_IN_FAIL;
  constructor(public payload: {errorMessage: string}) {}
}

export type AuthActions = ActionAuthSignIn
                        | ActionAuthSignInSuccess
                        | ActionAuthSignInFail


export const initialState: AuthState = {
  email: '',
  loggedIn: false,
  loading: false,
  loadingMsg: ''
};

export const selectorAuth = (state: AppState) => state.auth;
export function authReducer(
  state: AuthState = initialState,
  action: AuthActions
): AuthState {
  switch (action.type) {
    case AuthActionTypes.AUTH_SIGNIN_IN:
      return {
        ...state,
        loading: true,
        loadingMsg: 'Sigining In',
        loggedIn: false,
        // errorMessage: ''
      }
    case AuthActionTypes.AUTH_SIGN_IN_SUCCESS:
      console.log('Login Success ###', action.payload);
      return {
        ...state,
        loading: false,
        loadingMsg: '',
        loggedIn: action.payload.success,
        email: action.payload.email,
        token: action.payload.token,
        role: action.payload.role
      }
      case AuthActionTypes.AUTH_SIGN_IN_FAIL:
      return {
        ...state,
        loading: false,
        loadingMsg: '',
        loggedIn: false,
        errorMessage: action.payload.errorMessage
      }

    default:
      return state;
  }
}



