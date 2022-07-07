import { TestBed } from '@angular/core/testing';

import { PublishContainerService } from './publish-container.service';

describe('PublishContainerService', () => {
  let service: PublishContainerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PublishContainerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
