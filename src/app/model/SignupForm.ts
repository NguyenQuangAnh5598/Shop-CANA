export class SignupForm {
  name?: string;
  userName?: string;
  email?: string;
  password?: string;
  phone?: string;
  address?: string;
  roles?: string[];


  constructor(name?: string, userName?: string, email?: string, password?: string, phone?: string, address?: string, roles?: string[]) {
    this.name = name;
    this.userName = userName;
    this.email = email;
    this.password = password;
    this.phone = phone;
    this.address = address;
    this.roles = ['customer'];
  }
}
