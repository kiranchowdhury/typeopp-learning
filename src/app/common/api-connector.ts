import { HttpClient, HttpHeaders } from '@angular/common/http';
export interface ApiConnector {
  apiUrl: string,
  apiClient: HttpClient,
  options: {headers: HttpHeaders},
  reqPayLoad: any
}
