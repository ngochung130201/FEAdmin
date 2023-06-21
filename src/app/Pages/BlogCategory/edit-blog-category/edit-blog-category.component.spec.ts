import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBlogCategoryComponent } from './edit-blog-category.component';

describe('EditBlogCategoryComponent', () => {
  let component: EditBlogCategoryComponent;
  let fixture: ComponentFixture<EditBlogCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditBlogCategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditBlogCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
