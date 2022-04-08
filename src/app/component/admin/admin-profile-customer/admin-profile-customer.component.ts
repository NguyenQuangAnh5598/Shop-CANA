import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {UserService} from '../../../service/user.service';
import {User} from '../../../model/User';
import {FormControl, Validators} from '@angular/forms';

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
  }
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  findUserById(): void{
    this.id = this.activatedRoute.snapshot.params.id;
    this.userService.getUserById(this.id).subscribe(user => {
      this.user = user;
    });
  }
  ngOnInit(): void {
    this.findUserById();
  }

  update(): void {
    console.log(this.user);
    this.userService.updateUser(this.user).subscribe(data => {
      this.router.navigate(['admin-home']);
    });
  }

  uploadFile(event): void {
    this.user.avatar = event;
  }
}
