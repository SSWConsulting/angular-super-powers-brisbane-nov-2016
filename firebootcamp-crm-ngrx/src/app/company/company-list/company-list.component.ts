import { CompanyService } from './../company.service';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Company } from './../company';

@Component({
  selector: 'fbc-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {
  companies$: Observable<Company[]>;

  constructor(
    private companyService: CompanyService,
    private store: Store<any>) {
    this.companies$ = this.store.select('companies');
  }

  ngOnInit() { 
    this.getCompanies();
   }

  getCompanies() {
    this.companyService.getCompanies();
  }

  deleteCompany(companyId: number) {
    this.companyService.deleteCompany(companyId)
      .subscribe(() => this.getCompanies());
  }
}
