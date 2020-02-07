import { TestBed } from '@angular/core/testing';

import { ForeignappService } from './foreignapp.service';

describe('ForeignappService', () => {
  let service: ForeignappService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ForeignappService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
