import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBlogCategoryComponent } from './add-blog-category.component';

describe('AddBlogCategoryComponent', () => {
  let component: AddBlogCategoryComponent;
  let fixture: ComponentFixture<AddBlogCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddBlogCategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddBlogCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
