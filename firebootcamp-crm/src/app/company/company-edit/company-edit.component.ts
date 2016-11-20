import { CompanyService } from './../company.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Company } from './../company';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fbc-company-edit',
  templateUrl: './company-edit.component.html',
  styleUrls: ['./company-edit.component.css']
})
export class CompanyEditComponent implements OnInit {
  company = <Company>{};
  companyId = this.activatedRoute.snapshot.params['id'];
  isNewCompany = this.companyId === 'new' ? true : false;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private companyService: CompanyService) { }

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
      debugger;
      this.companyService.saveCompany(this.company)
        .subscribe(() => this.router.navigateByUrl('/company/list'))
    }
  }
}

