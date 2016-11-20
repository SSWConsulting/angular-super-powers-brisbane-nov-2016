import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Company } from './company';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class CompanyService {
    API_BASE = 'http://firebootcamp-crm-api.azurewebsites.net/api/';


    constructor(private http: Http) { }

    getCompanies() {
        return this.http.get(this.API_BASE + `/company`)
            .map(data => data.json())
            .catch(this.errorHandler);
    }

    deleteCompany(companyId: number) {
        return this.http.delete(this.API_BASE + `company/${companyId}`)
            .map(data => data.json())
            .catch(this.errorHandler);
    }


    getCompany(companyId: number) {
        return this.http.get(this.API_BASE + `company/${companyId}`)
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
        console.log('error', error);
        return Observable.throw(error);
    }
}









// return Observable.of([
//       { name: 'company 1', email: 'email 1', phone: 111 }
//     ]);