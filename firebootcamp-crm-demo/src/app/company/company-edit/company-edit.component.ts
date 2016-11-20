import { CompanyService } from './../company.service';
import { Company } from './../company';
import { Component, OnInit } from '@angular/core';
  import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'fbc-company-edit',
  templateUrl: './company-edit.component.html',
  styleUrls: ['./company-edit.component.css']
})
export class CompanyEditComponent implements OnInit {
  companyId = this.activatedRoute.snapshot.params['id'];
  isNewCompany = this.companyId === 'new';

  company = <Company>{};

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private companyService: CompanyService
  ) { }

  ngOnInit() {
    if (!this.isNewCompany) {
      this.getCompany();
    }
  }

  getCompany() {
    this.companyService.getCompany(this.companyId)
      .subscribe(company => this.company = company);
  }

  saveCompany() {
    if (this.isNewCompany) {
      this.companyService.saveCompany(this.company)
        .subscribe(() => this.navigateToCompanyList());
    } else {

    }
  }

  navigateToCompanyList() {
    this.router.navigateByUrl('/company/list');
  }

}
