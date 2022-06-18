import { TestBed } from '@angular/core/testing';

import { ActiveRowService } from './active-row.service';

describe('ActiveRowService', () => {
  let service: ActiveRowService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActiveRowService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
