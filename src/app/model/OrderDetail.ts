import {Product} from './Product';
import {Order} from './Order';

export class OrderDetail {
  id?: number;
  orderQuantity?: number;
  productId?: number;
  product?: Product;
  order?: Order;

  constructor(id?: number, orderQuantity?: number, productId?: number, product?: Product, order?: Order) {
    this.id = id;
    this.orderQuantity = orderQuantity;
    this.productId = productId;
    this.product = product;
    this.order = order;
  }
}
