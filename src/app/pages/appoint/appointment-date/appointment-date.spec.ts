import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentDate } from './appointment-date';

describe('AppointmentDate', () => {
  let component: AppointmentDate;
  let fixture: ComponentFixture<AppointmentDate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppointmentDate]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppointmentDate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
