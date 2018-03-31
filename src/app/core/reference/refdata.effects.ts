import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';
import { Effect, Actions } from '@ngrx/effects';
import { ReferenceDataActionTypes,
        ActionRefLoadQuoteStatusReasoncodes,
        ActionRefLoadQuoteStatusReasoncodesSuccess,
        ActionRefLoadQuoteStatusReasoncodesFail } from './refdata.reducer';
import { switchMap } from 'rxjs/operators/switchMap';
import { map } from 'rxjs/operators/map';
import { RefdataService } from './refdata.service';
@Injectable()
export class RefDataEffects {
  constructor(
              private refDataService: RefdataService,
              private actions$: Actions,
              ) {}

  @Effect()
  loadQuoteStatus(): Observable<Action> {
    return this.actions$
      .ofType(ReferenceDataActionTypes.REF_LOAD_QUOTE_STATUS_REASONCODES)
      .pipe(
          switchMap((action: ActionRefLoadQuoteStatusReasoncodes) =>
          this.refDataService.getQuoteStatus(action.payload)
          .pipe(
            map(data => (data.status === '1' ?
                new ActionRefLoadQuoteStatusReasoncodesSuccess(data)
                : new ActionRefLoadQuoteStatusReasoncodesFail({errorMessage: data.message})))
          ))
      )
  }
}
