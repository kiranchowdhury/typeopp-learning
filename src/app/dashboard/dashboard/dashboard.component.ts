import { Component, OnInit, Inject } from '@angular/core';
import { ANIMATE_ON_ROUTE_ENTER } from '../../core/animations/router.transition';
import { environment as env } from '@env/environment';
import { LoadMyQuotesCountRequest, ActionDsbLoadMyquotesCount, StatusCodeCount, selectorDashboard } from '../dashboard.reducer';
import { Store } from '@ngrx/store';
import { AppState } from '../../core/models/app-state';
import { printLog, quoteStatusCodeToLabel } from '../../shared/util';
import { DashboardState } from '../dashboard-state';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { takeUntil, skipUntil } from 'rxjs/operators';
import { timer } from 'rxjs/observable/timer';
import { RefState } from '../../core/reference/refdata.reducer';
import { CodeLabel } from '../../common/models/code-label';

@Component({
  selector: 'anms-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  statusCodeLabels: CodeLabel[];
  reasonCodeLabels: CodeLabel[];
  myQuotesItem: StatusCodeCount[];
  animateOnRouteEnter = ANIMATE_ON_ROUTE_ENTER;
  dashboardState: DashboardState;
  loadingQuotePanel = false;
  loadQuotePanelPayload: LoadMyQuotesCountRequest;
  initialized: boolean;
  private unsubscribe$: Subject<void> = new Subject<void>();
  constructor(
              private store: Store<AppState>,
              ) { }

  loadQuotePanel() {
    this.store.select(state => state.ref)
    .subscribe((refState: RefState) => {
      this.statusCodeLabels = refState.quoteStatuses;
      this.reasonCodeLabels = refState.reasonCodes;
    });
    this.loadQuotePanelPayload = {apiid: 'manageQuote', methodName: 'getIBMQuoteSummary', query: 'summary'};
    this.store.dispatch(new ActionDsbLoadMyquotesCount({apiid: 'manageQuote', methodName: 'getIBMQuoteSummary', query: 'summary'}));
    this.store
      .select(selectorDashboard)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((dashbordState: DashboardState) => {
        this.dashboardState = dashbordState;
        // const myQuoteSummary: StatusCodeCount[]  = this.dashboardState.myQuotesSummary;
        // console.log('DASH BOARD STATE IS UNDER DASHBOAR COM_LOADQUOTE PANEL = ', myQuoteSummary)
        // this.myQuotesItem = quoteStatusCodeToLabel(myQuoteSummary, this.statusCodeLabels, this.reasonCodeLabels);
      })
  }
  ngOnInit() {
    this.loadQuotePanel();
  }

  reloadQuotePanel() {
    this.loadQuotePanelPayload = {apiid: 'manageQuote', methodName: 'getIBMQuoteSummary', query: 'summary'};
    this.store.dispatch(new ActionDsbLoadMyquotesCount({apiid: 'manageQuote', methodName: 'getIBMQuoteSummary', query: 'summary'}));
  }
}
