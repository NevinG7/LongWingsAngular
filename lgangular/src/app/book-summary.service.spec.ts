import { TestBed } from '@angular/core/testing';

import { BookSummaryService } from './book-summary.service';

describe('BookSummaryService', () => {
  let service: BookSummaryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookSummaryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
