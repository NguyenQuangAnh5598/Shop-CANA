import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {UserService} from '../../../service/user.service';
import {User} from '../../../model/User';

@Component({
  selector: 'app-admin-profile-customer',
  templateUrl: './admin-profile-customer.component.html',
  styleUrls: ['./admin-profile-customer.component.scss']
})
export class AdminProfileCustomerComponent implements OnInit {
  id = 0;
  user: User = {};

  constructor(private userService: UserService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.id = params.get('id');
      this.userService.getUserById(this.id).subscribe(user => {
        this.user = user;
      });
    });

  }

  ngOnInit(): void {

  }

  update(): void {
    this.userService.updateUser(this.user).subscribe(data => {
      this.router.navigate(['/admin-list-user']);
    });
  }

  uploadFile(event): void {
    this.user.avatar = event;
  }
}
