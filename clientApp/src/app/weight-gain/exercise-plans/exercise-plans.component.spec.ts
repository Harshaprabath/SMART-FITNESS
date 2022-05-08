import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExercisePlansComponent } from './exercise-plans.component';

describe('ExercisePlansComponent', () => {
  let component: ExercisePlansComponent;
  let fixture: ComponentFixture<ExercisePlansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExercisePlansComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExercisePlansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});