import { Component, OnInit, Input } from '@angular/core';
import { LoadMyQuotesCountRequest, StatusCodeCount, ActionDsbLoadMyquotesCount, selectorDashboard } from '../dashboard.reducer';
import { Store } from '@ngrx/store';
import { AppState } from '../../core/models/app-state';
import { DashboardState } from '../dashboard-state';
import { RefState } from '../../core/reference/refdata.reducer';
import { CodeLabel } from '../../common/models/code-label';
import { quoteStatusCodeToLabel } from '../../shared/util';
import { Subject } from 'rxjs/Subject';
import { takeUntil } from 'rxjs/operators/takeUntil';
import { distinctUntilChanged } from 'rxjs/operators/distinctUntilChanged';
import { skipUntil } from 'rxjs/operators';
import { timer } from 'rxjs/observable/timer';
@Component({
  selector: 'anms-quote-panel',
  templateUrl: './quote-panel.component.html',
  styleUrls: ['./quote-panel.component.scss']
})
export class QuotePanelComponent implements OnInit {
  private unsubscribe$: Subject<void> = new Subject<void>();
  loadQuotePanel: LoadMyQuotesCountRequest;
  // totalCount: number;
  // loading: boolean;
  // loadingMsg: string;
  // errorMsg: string;
  // statusCodeLabels: CodeLabel[];
  // reasonCodeLabels: CodeLabel[];
  // initialized: boolean;

  @Input() dsbState: DashboardState;
  // @Input() myQuotesItem: StatusCodeCount[];
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    console.log('THE dsbState inside the onInit is', this.dsbState);
    // this.store.select(state => state.ref)
    // .subscribe((refState: RefState) => {
    //   this.statusCodeLabels = refState.quoteStatuses;
    //   this.reasonCodeLabels = refState.reasonCodes;

    //   console.log('SUBSCRIBING TO DASHBOARD STATE');
    //   this.totalCount = +this.dsbState.totalMyquotesCount;
    //   this.loading = this.dsbState.loadingQuotePanel;
    //   console.log('LODING##########', this.loading)
    //   this.loadingMsg = this.dsbState.loadingQuotePanelMsg;
    //   this.errorMsg = this.dsbState.errorMsgQuotePanel;
    //   const myQuoteSummary: StatusCodeCount[] = this.dsbState.myQuotesSummary;
    //   console.log('DASHBOARD RESPONSE@@@@@@@', myQuoteSummary);
    //   this.myQuotesItem = quoteStatusCodeToLabel(myQuoteSummary, this.statusCodeLabels, this.reasonCodeLabels);
    // });

  }
}
