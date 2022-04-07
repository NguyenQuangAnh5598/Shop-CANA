import {Component, OnInit} from '@angular/core';
import {UserService} from '../../service/user.service';
import {stringify} from '@angular/compiler/src/util';

@Component({
  selector: 'app-email-forgot-password',
  templateUrl: './email-forgot-password.component.html',
  styleUrls: ['./email-forgot-password.component.scss']
})
export class EmailForgotPasswordComponent implements OnInit {
  error = {
    message: 'No Email'
  };
  status = 'You can reset your password here.';
  ok = {
    message: 'OK'
  };
  email: string;

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
  }

  getForgotPassword(): void {
    if (this.email !== '') {
      this.userService.getForgotPassword(this.email).subscribe(data => {
        if (JSON.stringify(data) === JSON.stringify(this.error)) {
          this.status = 'Email không tồn tại';
          console.log(this.status);
        } else if (JSON.stringify(data) === JSON.stringify(this.ok)) {
          this.status = 'Gmail xác nhận đã được gửi đến hòm thư của bạn! Xin kiểm tra';
          console.log(this.status);
          this.email = '';
        }
      });
    }
  }
}
