import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCommentComponent } from './product-comment.component';

describe('ProductCommentComponent', () => {
  let component: ProductCommentComponent;
  let fixture: ComponentFixture<ProductCommentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductCommentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
