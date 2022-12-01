import { TestBed } from '@angular/core/testing';

import { TrainerapiService } from './trainerapi.service';

describe('TrainerapiService', () => {
  let service: TrainerapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrainerapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
