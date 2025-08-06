import { TestBed } from '@angular/core/testing';

import { AppointmentDataAPI } from './appointment-data-api';

describe('AppointmentDataAPI', () => {
  let service: AppointmentDataAPI;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppointmentDataAPI);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
