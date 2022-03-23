import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodFactsComponent } from './food-facts.component';

describe('FoodFactsComponent', () => {
  let component: FoodFactsComponent;
  let fixture: ComponentFixture<FoodFactsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodFactsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodFactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
