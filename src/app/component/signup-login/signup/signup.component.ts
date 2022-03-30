import {Component, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {SignupForm} from '../../../model/SignupForm';
import {AuthService} from '../../../service/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  status = 'Please fill in the form to register!';
  hide = true;
  form: any = {};
  subscription: Subscription;
  signupForm: SignupForm;
  error1: any = {
    message: 'UserName was exists!'
  };

  error2: any = {
    message: 'Email was exists!'
  };
  success: any = {
    message: 'Signup Success!'
  };

  constructor(private authService: AuthService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  ngSubmit(): void {

    this.signupForm = new SignupForm(
      this.form.name,
      this.form.userName,
      this.form.email,
      this.form.password,
      this.form.phoneNumber,
      this.form.address
    );
    this.subscription = this.authService.signup(this.signupForm).subscribe(data => {
      // tslint:disable-next-line:triple-equals
      if (JSON.stringify(data) == JSON.stringify(this.error1)) {
        this.status = 'Username existed!';
      }
      // tslint:disable-next-line:triple-equals
      if (JSON.stringify(data) == JSON.stringify(this.error2)) {
        this.status = 'Email existed!';
      }
      // tslint:disable-next-line:triple-equals
      if (JSON.stringify(data) == JSON.stringify(this.success)) {
        this.status = 'Signup is Success. Please login your account!';
        alert(this.status);
        this.router.navigate(['/login']);
      }
    });
  }


}
