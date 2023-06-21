import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexSuppliersComponent } from './index-suppliers.component';

describe('IndexSuppliersComponent', () => {
  let component: IndexSuppliersComponent;
  let fixture: ComponentFixture<IndexSuppliersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexSuppliersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexSuppliersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
