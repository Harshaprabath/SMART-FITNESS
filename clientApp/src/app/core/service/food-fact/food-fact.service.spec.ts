import { TestBed } from '@angular/core/testing';

import { FoodFactService } from './food-fact.service';

describe('FoodFactService', () => {
  let service: FoodFactService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FoodFactService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
