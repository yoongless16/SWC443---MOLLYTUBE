import { TestBed } from '@angular/core/testing';

import { YoutubeService } from './youtubeservice.service';

describe('YoutubeServiceService', () => {
  let service: YoutubeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(YoutubeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
