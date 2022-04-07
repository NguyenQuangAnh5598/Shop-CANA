import {Component, OnInit} from '@angular/core';
import {UserPasswordDTO} from '../../../model/UserPasswordDTO';
import {UserService} from '../../../service/user.service';
import {Router} from '@angular/router';
import {TokenService} from '../../../service/token.service';

@Component({
  selector: 'app-customer-change-password',
  templateUrl: './customer-change-password.component.html',
  styleUrls: ['./customer-change-password.component.scss']
})
export class CustomerChangePasswordComponent implements OnInit {
  userPasswordDTO: UserPasswordDTO = {
    oldPassword: '',
    newPassword: '',
    checkPassword: '',
  };
  error = {
    message: 'Error'
  };
  status = '';
  form: any = {};
  hideOldPass: boolean;
  hideNewPass: boolean;
  hideCheckPass: boolean;

  constructor(private userService: UserService,
              private router: Router, private tokenService: TokenService) {
  }

  ngOnInit(): void {
  }

  updatePassword(): void {
    this.userPasswordDTO = {
      oldPassword: this.form.oldPassword,
      newPassword: this.form.newPassword,
      checkPassword: this.form.checkPassword
    };
    if (this.userPasswordDTO.newPassword === this.userPasswordDTO.checkPassword){
      this.userService.userChangePassword(this.userPasswordDTO).subscribe(data => {
        if (JSON.stringify(data) === JSON.stringify(this.error)){
          this.status = 'Mật khẩu cũ không đúng';
        }else{
          this.router.navigateByUrl('/home');
        }
      });
    }else{
      this.status = 'Mật khẩu mới không khớp!!';
    }
  }
  // logout(): void {
  //   this.tokenService.logout();
  //   window.location.reload();
  //   this.router.navigateByUrl('/signup');
  // }
}
