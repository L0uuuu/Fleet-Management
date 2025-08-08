import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicalFile } from './technical-file';

describe('TechnicalFile', () => {
  let component: TechnicalFile;
  let fixture: ComponentFixture<TechnicalFile>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TechnicalFile]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechnicalFile);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
