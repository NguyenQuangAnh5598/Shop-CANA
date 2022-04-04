import {User} from './User';

export class Order {
  id?: number;
  user?: User;
  createTime?: string;
  userId?: number;
  statusId?: number;
  note?: string;
  totalPrice?: number;


  constructor(id?: number, user?: User, createTime?: string, userId?: number, statusId?: number, note?: string, totalPrice?: number) {
    this.id = id;
    this.user = user;
    this.createTime = createTime;
    this.userId = userId;
    this.statusId = statusId;
    this.note = note;
    this.totalPrice = totalPrice;
  }
}
