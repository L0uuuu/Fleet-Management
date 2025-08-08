import { TestBed } from '@angular/core/testing';

import { VehiclesLog } from './vehicles-log';

describe('VehiclesLog', () => {
  let service: VehiclesLog;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VehiclesLog);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
