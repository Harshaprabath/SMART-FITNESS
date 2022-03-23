import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurSchedulesComponent } from './our-schedules.component';

describe('OurSchedulesComponent', () => {
  let component: OurSchedulesComponent;
  let fixture: ComponentFixture<OurSchedulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurSchedulesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OurSchedulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
