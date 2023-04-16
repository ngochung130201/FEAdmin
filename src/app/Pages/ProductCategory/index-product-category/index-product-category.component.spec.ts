import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexProductCategoryComponent } from './index-product-category.component';

describe('IndexProductCategoryComponent', () => {
  let component: IndexProductCategoryComponent;
  let fixture: ComponentFixture<IndexProductCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexProductCategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexProductCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
