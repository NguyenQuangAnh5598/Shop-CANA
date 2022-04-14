import {Component, OnInit} from '@angular/core';
import {UserService} from '../../../service/user.service';
import {TokenService} from '../../../service/token.service';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from '../../../model/User';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-customer-profile',
  templateUrl: './customer-profile.component.html',
  styleUrls: ['./customer-profile.component.scss']
})
export class CustomerProfileComponent implements OnInit {
  UserId = 0;
  user: User = {};
  time = new Date();
  maxDate: string;
  date = this.time.getDate();
  stringDate: string;
  month = this.time.getMonth() + 1;
  stringMonth: string;
  year = this.time.getFullYear();
  token: any;

  constructor(private userService: UserService,
              private tokenService: TokenService,
              private route: ActivatedRoute,
              private router: Router) {
    this.token = this.tokenService.getToken();

  }
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  findCurrentUser(): void {
    this.UserId = this.tokenService.getUserId();
    this.userService.getUserById(this.UserId).subscribe(data => {
      this.user = data;
    });
  }
  logout(): void {
    this.tokenService.logout();
    window.location.reload();
  }
  update(): void {
    this.userService.updateUser(this.user).subscribe();
  }

  ngOnInit(): void {
    if (this.date < 10) {
      this.stringDate = '0' + this.date;
    }
    else {
      this.stringDate = String(this.date);
    }
    if (this.month < 10) {
      this.stringMonth = '0' + this.month;
    }
    else {
      this.stringMonth = String(this.month);
    }
    this.maxDate = this.year + '-' + this.stringMonth + '-' + this.stringDate;
    this.findCurrentUser();
  }

  uploadFile(event): void {
    this.user.avatar = event;
  }
}
