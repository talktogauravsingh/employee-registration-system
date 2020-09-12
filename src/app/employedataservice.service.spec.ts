import { TestBed } from '@angular/core/testing';

import { EmployedataserviceService } from './employedataservice.service';

describe('EmployedataserviceService', () => {
  let service: EmployedataserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployedataserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
