import { TestBed } from '@angular/core/testing';

import { ServiceAPI } from './service-api';

describe('ServiceAPI', () => {
  let service: ServiceAPI;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceAPI);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
