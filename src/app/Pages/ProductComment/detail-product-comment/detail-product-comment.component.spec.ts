import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailProductCommentComponent } from './detail-product-comment.component';

describe('DetailProductCommentComponent', () => {
  let component: DetailProductCommentComponent;
  let fixture: ComponentFixture<DetailProductCommentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailProductCommentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailProductCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
