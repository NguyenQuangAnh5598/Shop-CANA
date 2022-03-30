import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCheckCompletedOrderComponent } from './admin-check-completed-order.component';

describe('AdminCheckCompletedOrderComponent', () => {
  let component: AdminCheckCompletedOrderComponent;
  let fixture: ComponentFixture<AdminCheckCompletedOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminCheckCompletedOrderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCheckCompletedOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
