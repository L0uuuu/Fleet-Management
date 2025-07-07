import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Inforamtions } from './inforamtions';

describe('Inforamtions', () => {
  let component: Inforamtions;
  let fixture: ComponentFixture<Inforamtions>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Inforamtions]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Inforamtions);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
