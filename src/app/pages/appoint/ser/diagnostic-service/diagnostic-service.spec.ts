import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagnosticService } from './diagnostic-service';

describe('DiagnosticService', () => {
  let component: DiagnosticService;
  let fixture: ComponentFixture<DiagnosticService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DiagnosticService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiagnosticService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
