import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProfileCustomerComponent } from './admin-profile-customer.component';

describe('AdminProfileCustomerComponent', () => {
  let component: AdminProfileCustomerComponent;
  let fixture: ComponentFixture<AdminProfileCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminProfileCustomerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminProfileCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
