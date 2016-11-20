import { CompanyService } from './company.service';
import { async, inject, TestBed } from '@angular/core/testing';
import { BaseRequestOptions, Http, HttpModule, Response, ResponseOptions, RequestMethod } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

// Hack for missing errorReponse from angular https://github.com/angular/angular/pull/8961
class ErrorResponse extends Response implements Error {
  name: any;
  message: any;
}

describe('CompanyService (Mocked)', () => {
  const mockCompanies = [
    { name: 'company 1', email: 'email 1', phone: 111 }
  ];

  beforeEach(() => {

    TestBed.configureTestingModule({
      providers: [
        CompanyService,

        MockBackend,
        BaseRequestOptions,
        {
          provide: Http,
          useFactory: (backend, options) => new Http(backend, options),
          deps: [MockBackend, BaseRequestOptions]
        }
      ],
      imports: [
        HttpModule
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });
  });

  it('should construct', async(inject(
    [CompanyService, MockBackend], (service: CompanyService, mockBackend: MockBackend) => {
      expect(service).toBeDefined();
    })));

  describe('should getCompanies', () => {
    it('should parse response', async(inject(
      [CompanyService, MockBackend], (service: CompanyService, mockBackend: MockBackend) => {

        mockBackend.connections.subscribe((connection: MockConnection) => {
          connection.mockRespond(new Response(new ResponseOptions({ body: JSON.stringify(mockCompanies) })));
        });

        const result = service.getCompanies();

        result.subscribe(response => {
          expect(response).toEqual(mockCompanies);
        });
      })));

    it('should use an HTTP call to obtain a companies', async(inject(
      [CompanyService, MockBackend], (service: CompanyService, backend: MockBackend) => {
        backend.connections.subscribe((connection: MockConnection) => {
          expect(connection.request.method).toBe(RequestMethod.Get);
          expect(connection.request.url).toBe('http://firebootcamp-crm-api.azurewebsites.net/api//company');
        });

        service.getCompanies();
      })));

    it('should throw error on 500', async(inject(
      [CompanyService, MockBackend], (service: CompanyService, mockBackend: MockBackend) => {
        mockBackend.connections.subscribe(
          (connection: MockConnection) => {
            connection.mockError(new ErrorResponse(new ResponseOptions({
              body: JSON.stringify({ error: 'Internal Server Error' }),
              status: 500,
            })));
          }
        );

        const result = service.getCompanies();

        result.subscribe(
          response => { },
          error => {
            expect(error.status).toEqual(500);
          });
      })));
  });
});
