import { StatusCodeCount } from './dashboard.reducer';
export interface DashboardState {
  apiRequestQuotePanel?: any,
  loadingQuotePanel: boolean,
  loadingQuotePanelMsg: string,
  errorMsgQuotePanel: string,
  myQuotesSummary?: StatusCodeCount[],
  totalMyquotesCount?: string
}


