import {Component, OnInit} from '@angular/core';
import {UserService} from '../../../service/user.service';
import {TokenService} from '../../../service/token.service';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from '../../../model/User';

@Component({
  selector: 'app-customer-profile',
  templateUrl: './customer-profile.component.html',
  styleUrls: ['./customer-profile.component.scss']
})
export class CustomerProfileComponent implements OnInit {
  UserId = 0;
  user: User = {};

  constructor(private userService: UserService,
              private tokenService: TokenService,
              private route: ActivatedRoute,
              private router: Router) {

  }

  findCurrentUser(): void {
    this.UserId = this.tokenService.getUserId();
    this.userService.getUserById(this.UserId).subscribe(data => {
      this.user = data;
    });
  }

  update(): void {
    this.userService.updateUser(this.user).subscribe(data => {
      this.router.navigate(['/home']);
    });
  }

  ngOnInit(): void {
    this.findCurrentUser();
  }

  uploadFile(event): void {
    this.user.avatar = event;
  }
}
