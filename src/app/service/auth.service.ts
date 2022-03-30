import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment.prod';
import {SignupForm} from '../model/SignupForm';
import {HttpClient} from '@angular/common/http';
import {JwtResponse} from '../model/JwtResponse';
import {LoginForm} from '../model/LoginForm';
import {Observable} from 'rxjs';

const API_LOCAL = `${environment.API_LOCAL}`;

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {
  }

  signup(signUpForm: SignupForm): Observable<SignupForm> {
    return this.http.post<SignupForm>(API_LOCAL + 'signup', signUpForm);
  }

  login(login: LoginForm): Observable<JwtResponse> {
    return this.http.post<JwtResponse>(API_LOCAL + 'login', login);
  }
}
