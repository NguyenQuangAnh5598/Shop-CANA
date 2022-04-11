import {Component, OnInit} from '@angular/core';
import {UserService} from '../../service/user.service';
import {stringify} from '@angular/compiler/src/util';
import {ErrorStateMatcher} from '@angular/material/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
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
  // test
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  matcher = new MyErrorStateMatcher();

// end test
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
