import { TestBed } from '@angular/core/testing';

import { CountserviceService } from './countservice.service';

describe('CountserviceService', () => {
  let service: CountserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CountserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
