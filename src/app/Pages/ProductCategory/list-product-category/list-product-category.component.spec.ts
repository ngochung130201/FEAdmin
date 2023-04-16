import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProductCategoryComponent } from './list-product-category.component';

describe('ListProductCategoryComponent', () => {
  let component: ListProductCategoryComponent;
  let fixture: ComponentFixture<ListProductCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListProductCategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListProductCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
