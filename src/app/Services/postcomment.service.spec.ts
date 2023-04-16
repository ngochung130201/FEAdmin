import { TestBed } from '@angular/core/testing';

import { PostcommentService } from './postcomment.service';

describe('PostcommentService', () => {
  let service: PostcommentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostcommentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
