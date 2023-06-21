import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexBlogCategoryComponent } from './index-blog-category.component';

describe('IndexBlogCategoryComponent', () => {
  let component: IndexBlogCategoryComponent;
  let fixture: ComponentFixture<IndexBlogCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexBlogCategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexBlogCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
