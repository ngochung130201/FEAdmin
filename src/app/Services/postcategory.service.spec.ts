import { TestBed } from '@angular/core/testing';

import { PostcategoryService } from './postcategory.service';

describe('PostcategoryService', () => {
  let service: PostcategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostcategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
