import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-search-customer-name',
  templateUrl: './search-customer-name.component.html',
  styleUrls: ['./search-customer-name.component.scss']
})
export class SearchCustomerNameComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  searchName(value: string) {
    this.router.navigateByUrl(`admin-home/search-name-customer/${value}`);
  }
}
