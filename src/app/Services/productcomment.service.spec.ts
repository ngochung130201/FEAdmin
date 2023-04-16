import { TestBed } from '@angular/core/testing';

import { ProductcommentService } from './productcomment.service';

describe('ProductcommentService', () => {
  let service: ProductcommentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductcommentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
