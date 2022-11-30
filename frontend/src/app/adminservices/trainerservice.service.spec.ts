import { TestBed } from '@angular/core/testing';

import { TrainerserviceService } from './trainerservice.service';

describe('TrainerserviceService', () => {
  let service: TrainerserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrainerserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
