import { Injectable } from '@angular/core';
import { ApiConnector } from '../core/model/api-connector';
import { UtilService } from '../common/util.service';
import { LoadMyQuotesCountRequest, LoadMyQuotesCountResponse } from './dashboard.reducer';
import { Observable } from 'rxjs/Observable';
import { ApiConnectorService } from '../common/api-connector.service';

@Injectable()
export class DashboardService {

  constructor(private apiConnector: ApiConnectorService,
              private utilService: UtilService) { }

  getMyQuoteCounts(payload: LoadMyQuotesCountRequest): Observable<LoadMyQuotesCountResponse> {
    console.log('DSB ---> getting My Quotes Count')
    const connector: ApiConnector = this.apiConnector.getClient('api/get', payload);
    const url = connector.apiUrl + this.utilService.getQueryString(connector.reqPayLoad);
    return connector.apiClient.get<LoadMyQuotesCountResponse>(url, connector.options);
  }

}
