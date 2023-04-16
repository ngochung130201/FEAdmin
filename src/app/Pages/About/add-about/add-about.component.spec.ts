import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAboutComponent } from './add-about.component';

describe('AddAboutComponent', () => {
  let component: AddAboutComponent;
  let fixture: ComponentFixture<AddAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAboutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
