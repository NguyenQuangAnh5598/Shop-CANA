import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCheckOrderComponent } from './admin-check-order.component';

describe('AdminCheckOrderComponent', () => {
  let component: AdminCheckOrderComponent;
  let fixture: ComponentFixture<AdminCheckOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminCheckOrderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCheckOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
