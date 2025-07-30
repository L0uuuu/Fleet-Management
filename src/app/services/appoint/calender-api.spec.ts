import { TestBed } from '@angular/core/testing';

import { CalenderAPI } from './calender-api';

describe('CalenderAPI', () => {
  let service: CalenderAPI;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalenderAPI);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
