import { Action } from '@ngrx/store';
import { DashboardState } from './dashboard-state';
import { AppState } from '../core/models/app-state';
export const DASHBOARD_KEY = 'DSB';

export enum DashboardActionTypes {
  DASHBOARD_LOAD_MYQUOTES_COUNT = 'Dsb Load Myquotes Count',
  DASHBOARD_LOAD_MYQUOTES_COUNT_SUCCESS = 'Dsb Load Myquotes Count Success',
  DASHBOARD_LOAD_MYQUOTES_COUNT_FAIL = 'Dsb Load Myquotes Count Fail',
}

export class ActionDsbLoadMyquotesCount implements Action {
  readonly type = DashboardActionTypes.DASHBOARD_LOAD_MYQUOTES_COUNT;
  constructor(public payload: LoadMyQuotesCountRequest) {}
}

export class ActionDsbLoadMyquotesCountSuccess implements Action {
  readonly type = DashboardActionTypes.DASHBOARD_LOAD_MYQUOTES_COUNT_SUCCESS;
  constructor(public payload: LoadMyQuotesCountResponse) {}
}

export class ActionDsbLoadMyquotesCountFail implements Action {
  readonly type = DashboardActionTypes.DASHBOARD_LOAD_MYQUOTES_COUNT_FAIL;
  constructor(public payload: {errorMsg: string}) {}
}

export type DashboardAction = ActionDsbLoadMyquotesCount
                            | ActionDsbLoadMyquotesCountSuccess
                            | ActionDsbLoadMyquotesCountFail

export const initialDashBoardState: DashboardState = {
  loadingQuotePanel: false,
  loadingQuotePanelMsg: '',
  apiRequestQuotePanel: null,
  errorMsgQuotePanel: ''
}
export const selectorDashboard = (state: AppState) => state.dashboard || initialDashBoardState;
export function dashboaedReducer(
  state: DashboardState = initialDashBoardState,
  action: DashboardAction
 ): DashboardState {
   switch (action.type) {
     case DashboardActionTypes.DASHBOARD_LOAD_MYQUOTES_COUNT:
      return {
        ...state,
        apiRequestQuotePanel: action.payload,
        loadingQuotePanel: true,
        loadingQuotePanelMsg: 'Loading My Quotes...'
      }
     case DashboardActionTypes.DASHBOARD_LOAD_MYQUOTES_COUNT_SUCCESS:
      console.log('DASHBOARD API RESPONSES', action.payload.items[0].total);
      return {
        ...state,
        myQuotesSummary: action.payload.items[0].total ? action.payload.items[0].total : [],
        totalMyquotesCount: action.payload.items[0].myquotescount ? action.payload.items[0].myquotescount[0].totalcount : '0',
        loadingQuotePanel: false,
        loadingQuotePanelMsg: ''
      }
     case DashboardActionTypes.DASHBOARD_LOAD_MYQUOTES_COUNT_FAIL:
      return {
        ...state
      }
     default:
      return state;
   }
 }

export interface LoadMyQuotesCountRequest {
  apiid: string,
  methodName: string,
  expiryweeks?: string,
  quoteid?: string,
  query: string,
  selectedGroupCode?: string
}

export interface LoadMyQuotesCountResponse {
  responsetime: string,
  status: string,
  message: string,
  items: Item[]
}

export interface Item {
  total: StatusCodeCount[],
  myquotescount: [{totalcount: string}]
}

export interface StatusCodeCount {
  statuscode: string,
  count: string
}
