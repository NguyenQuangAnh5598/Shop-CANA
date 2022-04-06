import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CategoryService} from '../../service/category.service';
import {TokenService} from '../../service/token.service';
import { Router} from '@angular/router';

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
              private tokenService: TokenService,
              private router: Router) {
    this.token = this.tokenService.getToken();
  }

  ngOnInit(): void {
  }

  searchProductByname(): void {
    this.searchByname.emit(this.searchText);
  }

  logout(): void {
    this.tokenService.logout();
    window.location.reload();
    this.router.navigate(['/home']);
  }

}
