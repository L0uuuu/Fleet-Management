import { TestBed } from '@angular/core/testing';

import { LoginAPI } from './login-api';

describe('LoginAPI', () => {
  let service: LoginAPI;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginAPI);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
