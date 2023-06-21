import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexMenuComponent } from './index-menu.component';

describe('IndexMenuComponent', () => {
  let component: IndexMenuComponent;
  let fixture: ComponentFixture<IndexMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
