import {Component, OnInit} from '@angular/core';
import {Order} from '../../../model/Order';
import {OrderService} from '../../../service/order.service';

@Component({
  selector: 'app-admin-check-completed-order',
  templateUrl: './admin-check-completed-order.component.html',
  styleUrls: ['./admin-check-completed-order.component.scss']
})
export class AdminCheckCompletedOrderComponent implements OnInit {
  orderList: Order[] = [];

  constructor(private orderService: OrderService) {
  }

  ngOnInit(): void {
    this.getAllOrderByStatusId();
  }

  getAllOrderByStatusId(): void {
    this.orderService.findAllOrderByStatusId(3).subscribe(data => {
      this.orderList = data;
      console.log(data);

    });
  }

  acceptOrder(id: any, index: any): void {
    console.log(id);
    this.orderService.checkOrder(id).subscribe(() => {
      alert('Đơn hàng đã được giao hoàn tất');
      this.orderList.splice(index, 1);
      console.log(this.orderList);
    });
  }
}
