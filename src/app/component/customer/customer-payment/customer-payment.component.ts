import {Component, OnInit} from '@angular/core';
import {OrderService} from '../../../service/order.service';
import {TokenService} from '../../../service/token.service';
import {UserService} from '../../../service/user.service';
import {OrderDetailService} from '../../../service/order-detail.service';
import {Router} from '@angular/router';
import {Order} from '../../../model/Order';
import {OrderDetail} from '../../../model/OrderDetail';
import {CountChangeDTO} from '../../../model/CountChangeDTO';
import {EmitService} from '../../../service/emit.service';

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
  error: any = {
    message: '403'
  };

  constructor(private orderService: OrderService,
              private tokenService: TokenService,
              private userService: UserService,
              private orderDetailService: OrderDetailService,
              private router: Router,
              private emitService: EmitService
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
    this.orderService.payment(this.orderId).subscribe(data => {
      const countChange = new CountChangeDTO();
      countChange.id = -1;
      countChange.status = 'payment';
      this.emitService.emitChange(countChange);
      console.log(data);
      if (JSON.stringify(data) === JSON.stringify(this.error)) {
        console.log(true);
        this.router.navigate(['/error']);
      }else {
        alert('Đặt hàng thành công, hãy chờ');
        this.router.navigate(['home/customer-list-order']);
      }
    });
  }
}
