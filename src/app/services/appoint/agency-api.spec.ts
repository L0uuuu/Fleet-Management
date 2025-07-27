import { TestBed } from '@angular/core/testing';

import { AgencyAPI } from './agency-api';

describe('AgencyAPI', () => {
  let service: AgencyAPI;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgencyAPI);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
