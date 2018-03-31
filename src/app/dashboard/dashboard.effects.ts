import { Injectable } from '@angular/core';
import { DashboardService } from './dashboard.service';
import { Actions, Effect } from '@ngrx/effects';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';
import { DashboardActionTypes,
         ActionDsbLoadMyquotesCount,
         ActionDsbLoadMyquotesCountSuccess,
         ActionDsbLoadMyquotesCountFail } from './dashboard.reducer';
import { switchMap } from 'rxjs/operators/switchMap';
import { map } from 'rxjs/operators/map';
import { tap } from 'rxjs/operators/tap';

@Injectable()
export class DashboardEffects {
  constructor(private dashboardService: DashboardService,
              private actions$: Actions,
              private router: Router) {}

  @Effect()
  loadQuotePanel(): Observable<Action> {
    return this.actions$
      .ofType(DashboardActionTypes.DASHBOARD_LOAD_MYQUOTES_COUNT)
      .pipe(
        switchMap((action: ActionDsbLoadMyquotesCount) =>
          this.dashboardService.getMyQuoteCounts(action.payload)
          .pipe(
            map(data => (data.status === '1' ?
              new ActionDsbLoadMyquotesCountSuccess(data)
              : new ActionDsbLoadMyquotesCountFail({errorMsg: data.message})))
          ))
      )
  }

}
