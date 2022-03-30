import {Component, OnInit} from '@angular/core';
import {LoginForm} from '../../../model/LoginForm';
import {Subscription} from 'rxjs';
import {AuthService} from '../../../service/auth.service';
import {Router} from '@angular/router';
import {TokenService} from '../../../service/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: any = {};
  hide = true;
  loginForm: LoginForm = {};
  subscription: Subscription;

  constructor(private router: Router,
              private authService: AuthService,
              private tokenService: TokenService) {
  }

  ngOnInit(): void {
  }

  ngSubmit(): void {
    this.loginForm = new LoginForm(
      this.form.userName,
      this.form.password
    );
    console.log(this.loginForm);
    this.subscription = this.authService.login(this.loginForm).subscribe(data => {
      // tslint:disable-next-line:triple-equals
      if (data.token != undefined) {
        this.tokenService.setToken(data.token);
        this.tokenService.setName(data.name);
        this.tokenService.setRole(data.roles);
        this.tokenService.setAvatar(data.avatar);
        this.tokenService.setUserId(data.id);
        console.log(data.roles);
        // tslint:disable-next-line:triple-equals
        if (data.roles[0] == 'admin') {
          this.router.navigate(['/home-admin']).then(() => {
            window.location.reload();
          });
        } else {
          this.router.navigate(['/home']).then(() => {
            window.location.reload();
          });
        }
      } else {
        alert('Your account has been error');
      }
    });
  }
}
