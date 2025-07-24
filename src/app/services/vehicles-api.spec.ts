import { TestBed } from '@angular/core/testing';

import { VehiclesAPI } from './vehicles-api';

describe('VehiclesAPI', () => {
  let service: VehiclesAPI;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VehiclesAPI);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
