import {Role} from './Role';

export class User {
  id?: number;
  username?: string;
  password?: string;
  name?: string;
  avatar?: string;
  email?: string;
  phone?: string;
  address?: string;
  dob?: any;
  status?: any;
  roles?: Role[];


  constructor(id?: number, username?: string, password?: string,
              name?: string, avatar?: string, email?: string, phone?: string, address?: string, dob?: any, status?: any, roles?: Role[]) {
    this.id = id;
    this.username = username;
    this.password = password;
    this.name = name;
    this.avatar = avatar;
    this.email = email;
    this.phone = phone;
    this.address = address;
    this.dob = dob;
    this.status = status;
    this.roles = roles;
  }
}
