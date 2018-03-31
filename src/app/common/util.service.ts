import { Injectable } from '@angular/core';

@Injectable()
export class UtilService {

  constructor() { }

  getQueryString(params): string {
    const queryString = Object.keys(params).map(key => key + '=' + params[key]).join('&');
    console.log('QUERY STRING', queryString);
    return ('?' + queryString);
  }

}
