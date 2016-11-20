import { Company } from './../company';
import { Component, OnInit } from '@angular/core';
import { CompanyService } from './../company.service';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/take';

@Component({
  selector: 'fbc-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {
  companies: any;

  constructor(private companyService: CompanyService) { }

  ngOnInit() {
    this.getCompanies();

  }

  getCompanies() {
    this.companyService.getCompanies()
    .take(1)
      .subscribe(data => {
        this.companies = data;
      });
  }

  deleteCompany(companyId: number) {
    this.companyService.deleteCompany(companyId)
      .subscribe(() => this.getCompanies());
  }

}
