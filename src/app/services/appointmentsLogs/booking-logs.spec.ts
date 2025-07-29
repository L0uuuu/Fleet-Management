import { TestBed } from '@angular/core/testing';

import { BookingLogs } from './booking-logs';

describe('BookingLogs', () => {
  let service: BookingLogs;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookingLogs);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
