import {Component, OnInit} from '@angular/core';
import {Order} from '../../../model/Order';
import {OrderService} from '../../../service/order.service';
import {TokenService} from '../../../service/token.service';

@Component({
  selector: 'app-customer-list-order',
  templateUrl: './customer-list-order.component.html',
  styleUrls: ['./customer-list-order.component.scss']
})
export class CustomerListOrderComponent implements OnInit {
  userId = 0;
  orderList: Order[] = [];
  status = 'dasadsad';

  constructor(private orderService: OrderService,
              private tokenService: TokenService) {
  }

  ngOnInit(): void {
    this.userId = this.tokenService.getUserId();
    console.log(this.userId);
    this.showUnCheckOrderList();
  }

  showUnCheckOrderList(): void {
    this.status = 'Đang chờ xác nhận';
    this.orderService.findAllOrderByUserIdAndStatusId(this.userId, 2).subscribe(data => {
      this.orderList = data;
      // tslint:disable-next-line:triple-equals
      console.log(this.orderList);
    });
  }

  showCheckedOrderList(): void {
    this.status = 'Đang vận chuyển';
    this.orderService.findAllOrderByUserIdAndStatusId(this.userId, 3).subscribe(data => {
      this.orderList = data;
      console.log(this.orderList);
      // tslint:disable-next-line:triple-equals
    });
  }

  showCompletedOrderList(): void {
    this.status = 'Đã hoàn thành';
    this.orderService.findAllOrderByUserIdAndStatusId(this.userId, 4).subscribe(data => {
      this.orderList = data;
      console.log(this.orderList);
    });
  }

  showCancelOrderList(): void {
    this.status = 'Đã hủy';
    this.orderService.findAllOrderByUserIdAndStatusId(this.userId, 5).subscribe(data => {
      this.orderList = data;
      console.log(this.orderList);
    });
  }

  cancelOrder(id: number, index: any): void {
    this.orderService.cancelOrderByOrderId(id).subscribe(() => {
      alert('Đã hủy đơn hàng');
      this.orderList.splice(index, 1);
    });
  }
}
