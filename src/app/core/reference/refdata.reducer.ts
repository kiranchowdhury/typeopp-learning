import { Action } from '@ngrx/store';
import { IQuoteStatus } from './quotestatus/quotestatus.model';
import { CodeLabel } from '../../common/models/code-label';
import { AppState } from '../models/app-state';

export const REF_KEY = 'REF';

export enum ReferenceDataActionTypes {
  REF_LOAD_QUOTE_STATUS_REASONCODES = '[Ref] Load Quote Status Reasoncodes',
  REF_LOAD_QUOTE_STATUS_REASONCODES_SUCCESS = '[Ref] Load Quote Status Reasoncodes Success',
  REF_LOAD_QUOTE_STATUS_REASONCODES_FAIL = '[Ref] Load Quote Status Reasoncodes Fail'
}

export class ActionRefLoadQuoteStatusReasoncodes implements Action {
  readonly type = ReferenceDataActionTypes.REF_LOAD_QUOTE_STATUS_REASONCODES;
  constructor(public payload: {apiid: string, methodname: string}) {}
}

export class ActionRefLoadQuoteStatusReasoncodesSuccess implements Action {
  readonly type = ReferenceDataActionTypes.REF_LOAD_QUOTE_STATUS_REASONCODES_SUCCESS;
  constructor(public payload: IQuoteStatus) {}
}

export class ActionRefLoadQuoteStatusReasoncodesFail implements Action {
  readonly type = ReferenceDataActionTypes.REF_LOAD_QUOTE_STATUS_REASONCODES_FAIL;
  constructor(public payload: {errorMessage: string}) {}
}

export type RefDataAction = ActionRefLoadQuoteStatusReasoncodes
                            | ActionRefLoadQuoteStatusReasoncodesSuccess
                            | ActionRefLoadQuoteStatusReasoncodesFail

export const initialRefState: RefState = {
  quoteStatusInitialized: false,
  loadingMsg: '',
  errorMessage: '',
  quoteStatuses: [],
  reasonCodes: []
}

export const selectorRefData = (state: AppState) => state.ref;

export function refDataReducer(
  state: RefState = initialRefState,
  action: RefDataAction
): RefState {
  switch (action.type) {
    case ReferenceDataActionTypes.REF_LOAD_QUOTE_STATUS_REASONCODES:
      return {
        ...state,
        errorMessage: '',
        apiRequest: action.payload
      }
    case ReferenceDataActionTypes.REF_LOAD_QUOTE_STATUS_REASONCODES_SUCCESS:
    const statuses = action.payload.bpstatuslist;
    const reasonCodes = action.payload.bpreasoncodeslist;
    Array.prototype.push.apply(statuses, action.payload.internalstatuslist);
    Array.prototype.push.apply(reasonCodes, action.payload.internalreasoncodeslist);
    console.log('Merged Quote Statuses#######', statuses);
    console.log('Merged Reason Codes#######', reasonCodes);
      return {
        ...state,
        quoteStatusInitialized: true,
        errorMessage: '',
        quoteStatuses: statuses,
        reasonCodes: reasonCodes
      }
    case ReferenceDataActionTypes.REF_LOAD_QUOTE_STATUS_REASONCODES_FAIL:
      return {
        ...state,
        quoteStatusInitialized: false,
        errorMessage: action.payload.errorMessage
      }
    default:
      return state
  }
}

export interface RefState {
  quoteStatusInitialized: boolean,
  apiRequest?: any,
  loadingMsg: string,
  errorMessage: string,
  quoteStatuses: CodeLabel[],
  reasonCodes: CodeLabel[]
}
