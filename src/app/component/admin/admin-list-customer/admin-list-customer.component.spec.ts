import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminListCustomerComponent } from './admin-list-customer.component';

describe('AdminListCustomerComponent', () => {
  let component: AdminListCustomerComponent;
  let fixture: ComponentFixture<AdminListCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminListCustomerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminListCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
