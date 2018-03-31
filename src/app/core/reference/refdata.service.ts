import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { IQuoteStatus } from './quotestatus/quotestatus.model';
import { ApiConnectorService } from '../../common/api-connector.service';
import { ApiConnector } from '../model/api-connector';
import { UtilService } from '../../common/util.service';

@Injectable()
export class RefdataService {

  constructor(private apiConnector: ApiConnectorService,
              private utiService: UtilService) { }

  getQuoteStatus(payload: {apiid: string, methodname: string}): Observable<IQuoteStatus> {
    console.log('Calling Get All Quote Status API');
    const connector: ApiConnector = this.apiConnector.getClient('api/get/', payload);
    const url = connector.apiUrl + this.utiService.getQueryString(connector.reqPayLoad);
    return connector.apiClient.get<IQuoteStatus>(url, connector.options);
  }

}
