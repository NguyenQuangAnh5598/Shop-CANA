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

  name = '';

  $e: any;


  constructor(private categoryService: CategoryService,
              private tokenService: TokenService,
              private router: Router) {
    this.token = this.tokenService.getToken();

    this.name = this.tokenService.getName();

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
  }

  onButtonClick($e): void {
    console.log($e);
    const clickedElement = $e.target ;
    console.log(clickedElement);
    console.log($e.target.value);
    if (clickedElement.nodeName === 'A') {
      const isActivated = clickedElement.parentElement.querySelector('.active');
      if (isActivated) {
        isActivated.classList.remove('active');
      }

      // clickedElement.className = clickedElement.append(' active');
      clickedElement.className += ' active';
    }
  }
}


