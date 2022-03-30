import {User} from './User';

export class Order {
  id?: number;
  user?: User;
  createTime?: string;
  userId?: number;
  statusId?: number;
  note?: string;


  constructor(id?: number, user?: User, createTime?: string, userId?: number, statusId?: number, note?: string) {
    this.id = id;
    this.user = user;
    this.createTime = createTime;
    this.userId = userId;
    this.statusId = statusId;
    this.note = note;
  }
}
