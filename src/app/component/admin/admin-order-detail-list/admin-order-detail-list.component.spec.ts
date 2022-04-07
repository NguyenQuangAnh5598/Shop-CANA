import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminOrderDetailListComponent } from './admin-order-detail-list.component';

describe('AdminOrderDetailListComponent', () => {
  let component: AdminOrderDetailListComponent;
  let fixture: ComponentFixture<AdminOrderDetailListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminOrderDetailListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminOrderDetailListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
