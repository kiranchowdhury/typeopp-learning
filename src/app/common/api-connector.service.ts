import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Store } from '@ngrx/store';
import { AppState } from '@app/models/state/app-state';

// import { initialState } from '../core/auth/auth.reducer';

@Injectable()
export class ApiConnectorService {
  context: any;
  httpOptions: any;
  // apiRequest: any;

  constructor(private httpClient: HttpClient, private store: Store<AppState>) { }


  getClient(url: string, reqPayLoad: any): any {
    this.store.select(state => state.auth).subscribe(context => {

      this.httpOptions  = {
        headers: new HttpHeaders({
          'Accept-Charset': 'charset=utf-8',
          'X-Force-Content-Type': 'application/json; charset=UTF-8'
        })
      };
      if (reqPayLoad) {
        reqPayLoad.acceptCharset = 'charset=utf-8';
        reqPayLoad.forceContentType = 'application/json; charset=UTF-8';
        reqPayLoad.token = this.context ? this.context.token : '';
        // reqPayLoad.env = this.context.env;
    } else {
      reqPayLoad = {
          'acceptCharset': 'charset=utf-8',
          'forceContentType': 'application/json; charset=UTF-8',
          'token': this.context.token
         // 'env': this.context.env
        }
    }
      console.log('within selector of store');
    });
    console.log('before returning');
    return {
              apiUrl: '/' + url,
              apiClient: this.httpClient,
              options: this.httpOptions,
              reqPayLoad: reqPayLoad
            }
  }

}
