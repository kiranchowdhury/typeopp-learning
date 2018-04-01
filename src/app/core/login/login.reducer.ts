import { Action } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';
import { AuthState } from '@app/models/state/auth-state';
import { AppState } from '@app/models/state/app-state';

export const AUTH_KEY = 'Auth';

export enum AuthActionTypes {
    AUTH_SIGN_IN = '[Auth] Sign In',
    AUTH_SIGN_IN_SUCCESS = '[Auth] Sign In Success',
    AUTH_SIGN_IN_UNAUTHORIZED = '[Auth] Sign In Unauthorized',
    AUTH_SIGN_IN_FAIL = '[Auth] Sign In Fail'
}

export class ActionAuthSignIn implements Action {
    readonly type = AuthActionTypes.AUTH_SIGN_IN;
    constructor(public paylod: {userName: string, password: string}) {}
}

export class ActionAuthSignInSuccess implements Action {
    readonly type = AuthActionTypes.AUTH_SIGN_IN_SUCCESS;
    constructor(public paylod: any) {}
}

export class ActionAuthSignInUnauthorized implements Action {
    readonly type = AuthActionTypes.AUTH_SIGN_IN_UNAUTHORIZED;
    constructor(public paylod: {reason: string, fault: string}) {}
}

export class ActionAuthSignInFail implements Action {
    readonly type = AuthActionTypes.AUTH_SIGN_IN_FAIL;
    constructor(public paylod: {error: HttpErrorResponse}) {}
}

export type AuthAction = ActionAuthSignIn |
                         ActionAuthSignInSuccess |
                         ActionAuthSignInUnauthorized |
                         ActionAuthSignInFail

export const initialState: AuthState = {
    loggedIn: false,
    loading: false,
    loadingMsg: ''
};

export const selectorAuth = (state: AppState) => state.auth || initialState;

export function authReducer(
    state: AuthState = initialState,
    action: AuthAction
): AuthState {
   switch (action.type) {
       case AuthActionTypes.AUTH_SIGN_IN:
       return {
           ...state,
           loading: true,
           loadingMsg: 'Signing In'
       }

       case AuthActionTypes.AUTH_SIGN_IN_SUCCESS:
       return {
           ...state,
           loading: false,
           loadingMsg: ''
       }
   }
}
