import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteAboutComponent } from './delete-about.component';

describe('DeleteAboutComponent', () => {
  let component: DeleteAboutComponent;
  let fixture: ComponentFixture<DeleteAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteAboutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
