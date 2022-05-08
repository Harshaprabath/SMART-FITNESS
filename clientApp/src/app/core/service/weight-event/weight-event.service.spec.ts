import { TestBed } from '@angular/core/testing';

import { WeightEventService } from './weight-event.service';

describe('WeightEventService', () => {
  let service: WeightEventService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeightEventService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
