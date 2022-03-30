import {Component, OnInit} from '@angular/core';
import {User} from '../../../model/User';
import {UserService} from '../../../service/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admin-list-customer',
  templateUrl: './admin-list-customer.component.html',
  styleUrls: ['./admin-list-customer.component.scss']
})
export class AdminListCustomerComponent implements OnInit {
  userList: User[] = [];

  constructor(private userService: UserService, private router: Router) {
  }

  ngOnInit(): void {
    this.findUserList();
  }

  findUserList(): void {
    this.userService.findAll().subscribe(userList => {
      this.userList = userList;
    });
  }

  updateUser(id: number): void {
    this.router.navigate(['/admin-profile-customer', id]);
  }
}
