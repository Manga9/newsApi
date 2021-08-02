import { TestBed } from '@angular/core/testing';

import { NewsAppTopHeadingServiceService } from './news-app-top-heading-service.service';

describe('NewsAppTopHeadingServiceService', () => {
  let service: NewsAppTopHeadingServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewsAppTopHeadingServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
