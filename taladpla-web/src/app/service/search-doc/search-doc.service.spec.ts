import { TestBed } from '@angular/core/testing';

import { SearchDocService } from './search-doc.service';

describe('SearchDocService', () => {
  let service: SearchDocService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchDocService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
