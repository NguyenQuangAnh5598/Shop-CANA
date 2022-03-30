import {Component, OnInit} from '@angular/core';
import {UserPasswordDTO} from '../../../model/UserPasswordDTO';
import {UserService} from '../../../service/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-customer-change-password',
  templateUrl: './customer-change-password.component.html',
  styleUrls: ['./customer-change-password.component.scss']
})
export class CustomerChangePasswordComponent implements OnInit {
  userPasswordDTO: UserPasswordDTO = {
    oldPassword: '',
    newPassword: ''
  };
  form: any = {};


  constructor(private userService: UserService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  updatePassword(): void {
    this.userPasswordDTO = {
      oldPassword: this.form.oldPassword,
      newPassword: this.form.newPassword
    };
    this.userService.userChangePassword(this.userPasswordDTO).subscribe(() => {
      alert('Change password successful!');
      // this.router.navigate(['/login'])

    });
  }
}
