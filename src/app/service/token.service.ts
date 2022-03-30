import {Injectable} from '@angular/core';
import {Role} from '../model/Role';

const USER_ID = 'User_Id';
const TOKEN_KEY = 'Token_Key';
const NAME_KEY = 'Name_Key';
const ROLE_KEY = 'Role_Key';
const AVATAR_KEY = 'Avatar_Key';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  private roles: Role[] = [];

  constructor() {
  }

  public setUserId(id: number): void {
    // Xoa di trong th co userid tu truoc
    window.sessionStorage.removeItem(USER_ID);
    // xet lai len sessionStorage
    // @ts-ignore
    window.sessionStorage.setItem(USER_ID, id);
  }

  public getUserId(): number {
    // @ts-ignore
    return window.sessionStorage.getItem(USER_ID);
  }

  public setToken(token: string): void {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string {
    return window.sessionStorage.getItem(TOKEN_KEY);
  }

  public setName(name: string): void {
    window.sessionStorage.removeItem(NAME_KEY);
    window.sessionStorage.setItem(NAME_KEY, name);
  }

  public getName(): string {
    return window.sessionStorage.getItem(NAME_KEY);
  }

  public setAvatar(avatar: string): void {
    window.sessionStorage.removeItem(AVATAR_KEY);
    window.sessionStorage.setItem(AVATAR_KEY, avatar);
  }

  public getAvatar(): string {
    return window.sessionStorage.getItem(AVATAR_KEY);
  }

  public setRole(roles: Role []): void {
    window.sessionStorage.removeItem(ROLE_KEY);
    window.sessionStorage.setItem(ROLE_KEY, JSON.stringify(roles));
  }

  public getRole(): Role[] {
    this.roles = [];
    if (sessionStorage.getItem(ROLE_KEY)) {
      JSON.parse(sessionStorage.getItem(ROLE_KEY)).forEach(role => {
        this.roles.push(role);
      });
      return this.roles;
    }
  }

  public logout(): void {
    window.sessionStorage.clear();
  }

}
