import { TestBed } from '@angular/core/testing';

import { CoreDataService } from './coreData.service';

describe('CoreDataService', () => {
  let service: CoreDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoreDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
