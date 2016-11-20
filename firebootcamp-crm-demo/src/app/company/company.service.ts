import { Company } from './company';
import { Injectable, enableProdMode } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Headers, RequestOptions } from '@angular/http';

import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class CompanyService {
  API_BASE = 'http://firebootcamp-crm-api.azurewebsites.net/api/';

  constructor(private http: Http) { }

  getCompany(companyId: number) {
    return this.http.get(this.API_BASE + `company/${companyId}`)
      .map(data => data.json())
      .catch(this.errorHandler);
  }

  getCompanies(): Observable<Company[]> {
    return this.http.get(this.API_BASE + `company`)
      .map(data => data.json())
      .catch(this.errorHandler);
  }

  deleteCompany(companyId: number) {
    return this.http.delete(this.API_BASE + `company/${companyId}`)
      .map(data => data.json())
      .catch(this.errorHandler);
  }


  saveCompany(company: Company) {
    const headers = new Headers({ 'content-type': 'application/json' });
      const options = new RequestOptions({headers: headers});

    return this.http.post(this.API_BASE + `company`, JSON.stringify(company), options)
      .map(data => data.json())
      .catch(this.errorHandler);
  }


  private errorHandler(error) {
    console.log('raygun like error', error);
    return Observable.throw(error);
  }
}












//  Observable.of([
//         {name: 'company 1', email: 'email 1', phone: 111}
//     ]);