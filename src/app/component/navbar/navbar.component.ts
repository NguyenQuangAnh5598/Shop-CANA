import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CategoryService} from '../../service/category.service';
import {TokenService} from '../../service/token.service';
import {Router} from '@angular/router';
import {OrderDetail} from '../../model/OrderDetail';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  token: any;
  i = 0;
  @Input()
  count: any;
  @Output() searchByname = new EventEmitter();
  searchText = '';

  constructor(private categoryService: CategoryService,
              private tokenService: TokenService,
              private router: Router) {
    this.token = this.tokenService.getToken();
    console.log(this.tokenService.getRole());
  }

  ngOnInit(): void {
    // console.log(this.btns);
  }

  searchProductByname(): void {
    this.searchByname.emit(this.searchText);
  }

  logout(): void {
    this.tokenService.logout();
    window.location.reload();
    this.router.navigate(['/home']);
  }

  // onButtonClick($e): void {
  //   let clickedElement = $e.target;
  //   if(clickedElement.nodeName === "a") {
  //     let le
  //   }
  // }
}



