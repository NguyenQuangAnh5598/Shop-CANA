import {Component, OnInit} from '@angular/core';
import {OrderService} from '../../../service/order.service';
import {TokenService} from '../../../service/token.service';
import {UserService} from '../../../service/user.service';
import {OrderDetailService} from '../../../service/order-detail.service';
import {Router} from '@angular/router';
import {Order} from '../../../model/Order';
import {OrderDetail} from '../../../model/OrderDetail';

@Component({
  selector: 'app-customer-payment',
  templateUrl: './customer-payment.component.html',
  styleUrls: ['./customer-payment.component.scss']
})
export class CustomerPaymentComponent implements OnInit {
  order: Order = {};
  totalPrice = 0;
  userId = 0;
  orderId = 0;
  orderDetailList: OrderDetail[] = [];

  constructor(private orderService: OrderService,
              private tokenService: TokenService,
              private userService: UserService,
              private orderDetailService: OrderDetailService,
              private router: Router
  ) {
    this.userId = this.tokenService.getUserId();
    console.log(this.userId);
    this.userService.findCurrentOrder(this.userId).subscribe(order => {
      this.orderId = order.id;
      this.orderService.findAllByOrder(order.id).subscribe(orderDetailList => {
        this.orderDetailList = orderDetailList;
        console.log(this.orderDetailList);
        this.getSum();
      });
    });
  }

  ngOnInit(): void {
  }
getSum(): void {
  // tslint:disable-next-line:prefer-for-of
  for (let i = 0; i < this.orderDetailList.length; i++) {
    this.totalPrice += (this.orderDetailList[i].product.price * this.orderDetailList[i].orderQuantity);
  }
}
  payment(): void {
    this.orderService.payment(this.orderId).subscribe(() => {
      alert('Đặt hàng thành công, hãy chờ');
      this.router.navigate(['home/customer-list-order']);
    });
  }
}
