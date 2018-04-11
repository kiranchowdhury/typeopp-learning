import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
// import { ApiInfo } from '@app/core/models/api-info';
import { Observable } from 'rxjs/Observable';
// import { LoginResponse, LoginRequest, AuthorizedRequest, AuthorizeResponse } from './auth.reducer';
import { HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators/map';
import { ApiConnectorService } from '../../common/api-connector.service';
// import { ApiConnector } from '../model/api-connector';
// import { LoginPayload } from '../model/login-payload';
import { UtilService } from '../../common/util.service';
import { LoginResponse } from '@app/core/auth/login-response';
import { ApiConnector } from '@app/common/api-connector';

@Injectable()
export class LoginService {

  constructor(private apiConnector: ApiConnectorService,
              private utilService: UtilService) { }


  login(payload: any): Observable<LoginResponse> {
    console.log('Login Service called');
    const connector: ApiConnector = this.apiConnector.getClient('api/login/', payload);
    return connector.apiClient.post<LoginResponse>(connector.apiUrl, payload);
  }


}
