import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailPostCommentComponent } from './detail-post-comment.component';

describe('DetailPostCommentComponent', () => {
  let component: DetailPostCommentComponent;
  let fixture: ComponentFixture<DetailPostCommentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailPostCommentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailPostCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
