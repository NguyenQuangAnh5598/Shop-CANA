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
  p = 1;

  constructor(private orderService: OrderService,
              private tokenService: TokenService) {
  }

  ngOnInit(): void {
    this.userId = this.tokenService.getUserId();
    console.log(this.userId);
    this.showUnCheckOrderList();
  }

  showUnCheckOrderList(): void {
    this.status = 'Waiting accept';
    this.orderService.findAllOrderByUserIdAndStatusId(this.userId, 2).subscribe(data => {
      this.orderList = data;
      // tslint:disable-next-line:triple-equals
      console.log(this.orderList);
    });
  }

  showCheckedOrderList(): void {
    this.status = 'Shipping';
    this.orderService.findAllOrderByUserIdAndStatusId(this.userId, 3).subscribe(data => {
      this.orderList = data;
      console.log(this.orderList);
      // tslint:disable-next-line:triple-equals
    });
  }

  showCompletedOrderList(): void {
    this.status = 'Completed';
    this.orderService.findAllOrderByUserIdAndStatusId(this.userId, 4).subscribe(data => {
      this.orderList = data;
      console.log(this.orderList);
    });
  }

  showCancelOrderList(): void {
    this.status = 'Cancelled';
    this.orderService.findAllOrderByUserIdAndStatusId(this.userId, 5).subscribe(data => {
      this.orderList = data;
      console.log(this.orderList);
    });
  }

  cancelOrder(id: number, index: any): void {
    this.orderService.cancelOrderByOrderId(id).subscribe(() => {
      alert('Order cancelled');
      this.orderList.splice(index, 1);
    });
  }

  onButtonClick($e): void {
    console.log($e);
    const clickedElement = $e.target ;
    console.log(clickedElement);
    console.log($e.target.value);
    if (clickedElement.nodeName === 'A') {
      const isActivated = clickedElement.parentElement.querySelector('.active');
      if (isActivated) {
        isActivated.classList.remove('active');
      }

      // clickedElement.className = clickedElement.append(' active');
      clickedElement.className += ' active';
    }
  }
}
