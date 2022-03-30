import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {OrderDetail} from '../../../model/OrderDetail';

@Component({
  selector: 'app-customer-order-detail',
  templateUrl: './customer-order-detail.component.html',
  styleUrls: ['./customer-order-detail.component.scss']
})
export class CustomerOrderDetailComponent implements OnInit {
  @Input()
  orderDetail: OrderDetail = {};
  @Output()
  orderDetailChange: EventEmitter<OrderDetail> = new EventEmitter<OrderDetail>();

  constructor() {
  }

  ngOnInit(): void {
    console.log(this.orderDetail);
    console.log(this.orderDetail.product);
  }

  update(): void {
    this.orderDetailChange.emit(this.orderDetail);
  }
}
