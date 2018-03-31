import { Action } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';
import { ApiInfo } from '../models/api-info';
import { RespHeader } from '../models/resp-header';
import { AppState } from '../models/app-state';
// import { ApiInfo } from '@app/core/models/api-info';
import { AppContext } from '../model/app-context';
import { LocalStorageService } from '@app/core';
import { LoginPayload } from '../model/login-payload';



export const AUTH_KEY = 'AUTH';

export enum AuthActionTypes {
  AUTH_SIGNIN_IN = '[Auth] Sign In',
  AUTH_SIGN_IN_SUCCESS = '[Auth] Sign In Success',
  AUTH_SIGN_IN_FAIL = '[Auth] Sign In Fail',
  LOGIN = '[Auth] Login',
  LOGIN_SUCCESS = '[Auth] Login Success',
  LOGIN_UNAUTHORIZED_ERROR= '[Auth] Login Unauthorized',
  LOGIN_ERROR= '[Auth] Login Error',
  LOGIN_AUTHORIZE = '[Auth] Authorize',
  LOGIN_AUTHORIZE_SUCCESS = '[Auth] Authorize Success',
  LOGIN_AUTHORIZE_ERROR = '[Auth] Authorize Error',
  LOGOUT = '[Auth] Logout'
}

export class ActionAuthSignIn implements Action {
  readonly type = AuthActionTypes.AUTH_SIGNIN_IN;
  constructor(public payload: {username: string, password: string, env: string}) {}
}


export class ActionAuthSignInSuccess implements Action {
  readonly type = AuthActionTypes.AUTH_SIGN_IN_SUCCESS;
  constructor(public payload: LoginPayload) {}
}

export class ActionAuthSignInFail implements Action {
  readonly type = AuthActionTypes.AUTH_SIGN_IN_FAIL;
  constructor(public payload: {errorMessage: string}) {}
}

export class ActionAuthLogin implements Action {
  readonly type = AuthActionTypes.LOGIN;
  constructor(public payload: LoginRequest) {}
}

export class ActionAuthLoginSuccess implements Action {
  readonly type = AuthActionTypes.LOGIN_SUCCESS;
  constructor(public payload: {data: LoginResponse, selectedGroupCode: string}) {}
}

export class ActionAuthLoginUnauthorized implements Action {
  readonly type = AuthActionTypes.LOGIN_UNAUTHORIZED_ERROR;
  constructor(public payload: {errorMessage: string}) {}
}

export class ActionAuthLoginError implements Action {
  readonly type = AuthActionTypes.LOGIN_ERROR;
  constructor(public payload: {error: HttpErrorResponse}) {}
}

export class ActionAuthAuthorize implements Action {
  readonly type = AuthActionTypes.LOGIN_AUTHORIZE;
  constructor(public payload: AuthorizedRequest) {}
  // constructor(public payload: ApiInfo) {}
}

export class ActionAuthAuthorizeSuccess implements Action {
  readonly type = AuthActionTypes.LOGIN_AUTHORIZE_SUCCESS;
  constructor(public payload: {data: AuthorizeResponse}) {}
  // constructor(public payload: ApiInfo) {}
}

export class ActionAuthAuthorizeError implements Action {
  readonly type = AuthActionTypes.LOGIN_AUTHORIZE_ERROR;
  constructor(public payload: {errorMessage: string}) {}
}

export class ActionAuthLogout implements Action {
  readonly type = AuthActionTypes.LOGOUT;
}

export type AuthActions = ActionAuthLogin
                        | ActionAuthLoginSuccess
                        | ActionAuthLoginUnauthorized
                        | ActionAuthLoginError
                        | ActionAuthAuthorize
                        | ActionAuthAuthorizeSuccess
                        | ActionAuthAuthorizeError
                        | ActionAuthLogout
                        | ActionAuthSignIn
                        | ActionAuthSignInSuccess
                        | ActionAuthSignInFail


export const initialState: AuthState = {
  appContext: {baseUrl: '/', geo: '', uniqueid: '', group: '', email: '', env: ''},
  apiRequest: {apiid: '', methodname: ''},
  isAuthenticated: false,
  displayWelcome: false,
  errorMessage: null,
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
        appContext: {
          baseUrl: '/',
          email: action.payload.username,
          geo: '',
          uniqueid: action.payload.username,
          group: '',
          token: '',
          env: action.payload.env
        },
        loading: true,
        loadingMsg: 'Sigining In',
        isAuthenticated: false,
        apiRequest: action.payload,
        errorMessage: ''
      }
    case AuthActionTypes.AUTH_SIGN_IN_SUCCESS:
      console.log('Login Success ###', action.payload);
      return {
        ...state,
       appContext: {
                      baseUrl: '/',
                      email: action.payload.email,
                      geo: '',
                      uniqueid: action.payload.email,
                      group: '',
                      token: action.payload.token,
                      env: state.appContext.env
                    },
        loading: false,
        loadingMsg: '',
        apiRequest: null,
        isAuthenticated: true
      }
      case AuthActionTypes.AUTH_SIGN_IN_FAIL:
      return {
        ...state,
        loading: false,
        loadingMsg: '',
        apiRequest: null,
        isAuthenticated: false,
        errorMessage: action.payload.errorMessage
      }
    case AuthActionTypes.LOGIN:
      return {
        ...state,
        isAuthenticated: true,
        // displayWelcome: true,
        loading: true,
        loadingMsg: 'Identifying user',
        apiRequest: action.payload,
        // apiResponse: null,
        error: null,
        errorMessage: ''
      };
    case AuthActionTypes.LOGIN_SUCCESS:
      // get the items
      const resp = action.payload.data;
      const item = action.payload.data.items[0];
      console.log('Login response ', item);
      return {
          ...state,
          appContext: {
                        baseUrl: '/',
                        email: item.email, geo: '',
                        uniqueid: item.email,
                        group: action.payload.selectedGroupCode,
                        token: state.appContext.token,
                        env: state.appContext.env
                      },
          isAuthenticated: true,
          // apiResponse: action.payload.data,
          status: resp.status,
          loginResponsetime: resp.responsetime,
          userid: item.userid,
          email: item.email,
          alias: item.alias,
          browserLanguage: item.browserlanguage,
          decimalSeparator: item.decimalseparator,
          groupingSeperator: item.groupingseparator,
          groups: item.groups,
          selectedGroup: action.payload.selectedGroupCode,
          selectedGroupCode: action.payload.selectedGroupCode,
          loading: false,
          loadingMsg: '',
          displayWelcome: true,
          error: null,
          apiRequest: null
      };

    case AuthActionTypes.LOGIN_UNAUTHORIZED_ERROR:
        return {
          ...state,
          isAuthenticated: false,
          // displayWelcome: true,
          loading: false,
          loadingMsg: '',
          displayWelcome: true,
          errorMessage: action.payload.errorMessage,
          error: null
        };
    case AuthActionTypes.LOGIN_AUTHORIZE:
        return {
          ...state,
          // displayWelcome: false,
          isAuthenticated: true,
          apiRequest: action.payload,
          loading: true,
          loadingMsg: 'Starting ePricer...',
          errorMessage: ''
        };
    case AuthActionTypes.LOGIN_AUTHORIZE_SUCCESS:
    console.log(action.payload.data);
    const authResp = action.payload.data;
    const authRespItem = action.payload.data.items[0];
        return {
          ...state,
          selectedGroup: authRespItem.selectedgroup,
          appContext: {
                        baseUrl: '/',
                        email: state.appContext.email,
                        geo: authRespItem.geo, uniqueid: state.appContext.email,
                        group: authRespItem.selectedgroup,
                        token: state.appContext.token,
                        env: state.appContext.env
                      },
          selectedGroupCode: authRespItem.selectedgroup,
          selectedGroupname: authRespItem.selectedgroupname,
          authToLandToPricing: authRespItem.authtolandtopricing,
          bpquotevisibility: authRespItem.bpquotevisibility,
          authorizations: authRespItem.auth_functions,
          apiRequest: null,
          error: null,
          displayWelcome: false,
          loading: false,
          loadingMsg: '',
          isAuthenticated: true
        }
    case AuthActionTypes.LOGIN_AUTHORIZE_ERROR:

        return {
            ...state,
            loading: false,
            loadingMsg: '',
            errorMessage: action.payload.errorMessage,
            error: null
        };
    case AuthActionTypes.LOGOUT:
      return { ...state, isAuthenticated: false, displayWelcome: true };

    default:
      return state;
  }
}

export interface AuthState {
  appContext: AppContext
  apiRequest: any,
  loading: boolean;
  loadingMsg: string;
  isAuthenticated: boolean;
  displayWelcome: boolean;
  errorMessage?: string;
  // LoginResponse
  groups?: Group[],
  selectedGroup?: string,
  selectedGroupCode?: string,
  userid?: string;
  email?: string,
  alias?: string,
  status?: string,
  decimalSeparator?: string,
  groupingSeperator?: string;
  browserLanguage?: string;
  loginResponsetime?: string,
  error?: HttpErrorResponse,
// Authorize response (Select Group)
  selectedGroupname?: string,
  authToLandToPricing?: string,
  bpquotevisibility?: string,
  authorizations?: AuthFunction[]
}

export interface LoginRequest {
  apiid: string,
  methodname: string
}

export interface AuthorizedRequest {
  apiid: string;
  methodname: string,
  selectedgroup: string
}



export interface LoginResponse {
  responsetime: string;
  message: string;
  status: string;
  items: LoginResponseItem[],
}

export interface LoginResponseItem {
  alias: string;
  selectedgroupcode: string;
  selectedgroup: string;
  groupingseparator: string;
  decimalseparator: string;
  browserlanguage: string;
  userid: string;
  email: string;
  groups: Group[];
}

export interface Group {
  id: String;
  name: String;
}

export interface AuthorizeResponse {
  responsetime: string;
  message: string;
  status: string;
  items: AuthorizeResponseItem[]
}

export interface AuthorizeResponseItem {
  geo: string,
  selectedgroup: string,
  selectedgroupname: string,
  authtolandtopricing: string,
  bpquotevisibility: string,
  auth_functions: AuthFunction[]
}

export interface AuthFunction {
  id: string
}

