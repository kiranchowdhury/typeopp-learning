import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Store } from '@ngrx/store';

// import { initialState } from '../core/auth/auth.reducer';

@Injectable()
export class ApiConnectorService {
  context: any;
  httpOptions: any;
  // apiRequest: any;

  constructor(private httpClient: HttpClient, private store: Store<any>) { }


  getClient(url: string, reqPayLoad: any): any {
    this.store.select(state => state.auth.appContext).subscribe(context => {
      // console.log('Context', context);
      // this.context = context ? context : initialState.appContext;
      this.httpOptions  = {
        headers: new HttpHeaders({
          'Accept':  'application/json;charset=utf-8',
          'Accept-Charset': 'charset=utf-8',
          'X-Force-Content-Type': 'application/json; charset=UTF-8',
          'X-Context-Group': this.context.group,
          'X-Context-geo': this.context.geo,
          'X-Context-Id': this.context.uniqueid
        })
      };
      if (reqPayLoad) {
        reqPayLoad.accept = 'application/json;charset=utf-8';
        reqPayLoad.acceptCharset = 'charset=utf-8';
        reqPayLoad.forceContentType = 'application/json; charset=UTF-8';
        reqPayLoad.contectGroup = this.context.group;
        reqPayLoad.contextGeo = this.context.geo;
        reqPayLoad.contextId = this.context.uniqueid;
        reqPayLoad.token = this.context.token;
        reqPayLoad.env = this.context.env;
    } else {
      reqPayLoad = {
          'accept':  'application/json;charset=utf-8',
          'acceptCharset': 'charset=utf-8',
          'forceContentType': 'application/json; charset=UTF-8',
          'contectGroup': this.context.group,
          'contextGeo': this.context.geo,
          'contextId': this.context.uniqueid,
          'token': this.context.token,
          'env': this.context.env
        }
    }
      console.log('within selector of store');
    });
    console.log('before returning');
    return {
              apiUrl: this.context.baseUrl + url,
              apiClient: this.httpClient,
              options: this.httpOptions,
              reqPayLoad: reqPayLoad
            }
  }

}
