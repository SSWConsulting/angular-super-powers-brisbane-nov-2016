import { CompanyService } from './../company.service';
import { CompanyListComponent } from './company-list.component';
import { async, TestBed, ComponentFixture } from '@angular/core/testing';
import { Observable } from 'rxjs/Observable';
import { Company } from './../company';
import { By } from '@angular/platform-browser';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe(`Component: Company List Component`, () => {
    let fixture: ComponentFixture<CompanyListComponent>, companyService: CompanyService,
        debugElement, component: CompanyListComponent;

    const mockCompanies = [{ id: 1, name: 'company 1' }, {  id: 2, name: 'company 2'}];
    const mockCompanies$ = Observable.of(mockCompanies);

    beforeEach(() => {

        class MockCompanyService {
            getCompanies(): Observable<Company[]> {
                return Observable.of(null);
            };

            deleteCompany(): Observable<Company[]> {
                return Observable.of(null);
            };
        }

        TestBed.configureTestingModule({
            declarations: [
                CompanyListComponent,
            ],
            providers: [
                  {provide: CompanyService, useClass: MockCompanyService}
            ],
            schemas: [NO_ERRORS_SCHEMA]
        });

        fixture = TestBed.createComponent(CompanyListComponent);
        companyService = fixture.debugElement.injector.get(CompanyService);
        debugElement = fixture.debugElement;
        component = debugElement.componentInstance;
    });

    it(`should be a sanity check`, () => {
        expect(1 + 1).toEqual(2);
    });

    it(`should make a component`, () => {
        expect(component).toBeTruthy();
    });

    it(`should have two companies`, () => {
        spyOn(companyService, 'getCompanies').and.returnValue(mockCompanies$);

        fixture.detectChanges();

        component.getCompanies();

        expect(component.companies.length).toEqual(2);
    });

    it(`should call delete companies`, async(() => {
        spyOn(companyService, 'deleteCompany').and.callThrough();
        spyOn(companyService, 'getCompanies').and.returnValue(mockCompanies$);

        fixture.detectChanges();

        let button = debugElement.query(By.css('.delete-btn'));
        button.triggerEventHandler('click');

        expect(companyService.deleteCompany).toHaveBeenCalledWith(1);
    }));

});
