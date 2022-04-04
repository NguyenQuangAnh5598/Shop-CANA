import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import firebase from 'firebase';
import {CategoryService} from '../../service/category.service';
import {Category} from '../../model/Category';
import {TokenService} from '../../service/token.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  token: any;

  @Output() searchByname = new EventEmitter();
  searchText = '';

  constructor(private categoryService: CategoryService,
              private tokenService: TokenService) {
    this.token = this.tokenService.getToken();
  }

  ngOnInit(): void {
  }

  searchProductByname(): void {
    this.searchByname.emit(this.searchText);
  }


}
