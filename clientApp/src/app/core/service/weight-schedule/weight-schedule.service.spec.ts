import { TestBed } from '@angular/core/testing';

import { WeightScheduleService } from './weight-schedule.service';

describe('WeightScheduleService', () => {
  let service: WeightScheduleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeightScheduleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
