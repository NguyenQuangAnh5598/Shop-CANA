import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchCustomerNameComponent } from './search-customer-name.component';

describe('SearchCustomerNameComponent', () => {
  let component: SearchCustomerNameComponent;
  let fixture: ComponentFixture<SearchCustomerNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchCustomerNameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchCustomerNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
