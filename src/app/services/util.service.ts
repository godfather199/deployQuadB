import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  get_Url='https://api.wazirx.com/api/v2/tickers';

  get_Result= '/assets/content.json';

  constructor(private httpClient: HttpClient) { }

  getFunction() {
    return this.httpClient.get(this.get_Result);
  }

}
