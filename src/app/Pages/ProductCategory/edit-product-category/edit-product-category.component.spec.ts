import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProductCategoryComponent } from './edit-product-category.component';

describe('EditProductCategoryComponent', () => {
  let component: EditProductCategoryComponent;
  let fixture: ComponentFixture<EditProductCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditProductCategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditProductCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
