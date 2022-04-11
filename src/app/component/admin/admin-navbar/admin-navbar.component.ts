import { Component, OnInit } from '@angular/core';
import {TokenService} from '../../../service/token.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admin-navbar',
  templateUrl: './admin-navbar.component.html',
  styleUrls: ['./admin-navbar.component.scss']
})
export class AdminNavbarComponent implements OnInit {
  token: any;
  name = '';
  constructor(private tokenService: TokenService,
              private router: Router) {
    this.token = this.tokenService.getToken();

    this.name = this.tokenService.getName();
  }
  ngOnInit(): void {
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
  logout(): void {
    this.tokenService.logout();
    this.router.navigate(['/']);
  }
}
