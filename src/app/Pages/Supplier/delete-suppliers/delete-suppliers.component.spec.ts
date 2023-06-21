import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteSuppliersComponent } from './delete-suppliers.component';

describe('DeleteSuppliersComponent', () => {
  let component: DeleteSuppliersComponent;
  let fixture: ComponentFixture<DeleteSuppliersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteSuppliersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteSuppliersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
