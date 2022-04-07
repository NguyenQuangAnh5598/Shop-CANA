import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../model/User';
import {environment} from '../../environments/environment.prod';
import {Order} from '../model/Order';
import {UserPasswordDTO} from '../model/UserPasswordDTO';

const API_LOCAL = `${environment.API_LOCAL}`;

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  getUserById(id: number): Observable<User> {
    return this.http.get<User>(API_LOCAL + 'user/' + id);
  }

  findCurrentOrder(id: number): Observable<Order> {
    return this.http.get<Order>(API_LOCAL + 'user/findCurrentOrder/' + id);
  }

  findAll(): Observable<User[]> {
    return this.http.get<User[]>(API_LOCAL + 'user');
  }

  updateUser(user: User): Observable<User> {
    return this.http.put<User>(API_LOCAL + 'user', user);
  }

  userChangePassword(userPasswordDTO: UserPasswordDTO): Observable<UserPasswordDTO> {
    return this.http.put<UserPasswordDTO>(API_LOCAL + 'user/changePassword', userPasswordDTO);
  }

  // tslint:disable-next-line:typedef
  deleteCustomer(id: number) {
    return this.http.delete(API_LOCAL + 'user/' + id);
  }
  searchUserByName(name: string): Observable<User[]> {
    return this.http.get<User[]>(API_LOCAL + 'user/findUserByUsernameOrEmail/' + name);
  }
  getForgotPassword(email: string): Observable<any> {
    return this.http.post(API_LOCAL + 'email', email);
  }
}
