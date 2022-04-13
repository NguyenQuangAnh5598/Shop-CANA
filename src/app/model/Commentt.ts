import {User} from './User';

export class Commentt {
  id?: number;
  productId?: number;
  textt?: string;
  user?: User;

  constructor(id?: number, productId?: number, text?: string, user?: User) {
    this.id = id;
    this.productId = productId;
    this.textt = text;
    this.user = user;
  }
}
