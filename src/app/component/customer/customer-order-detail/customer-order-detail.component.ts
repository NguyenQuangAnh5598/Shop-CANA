import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {OrderDetail} from '../../../model/OrderDetail';
import {OrderDetailService} from '../../../service/order-detail.service';
import {OrderService} from '../../../service/order.service';

@Component({
  selector: 'app-customer-order-detail',
  templateUrl: './customer-order-detail.component.html',
  styleUrls: ['./customer-order-detail.component.scss']
})
export class CustomerOrderDetailComponent implements OnInit {
  orderDetailList: OrderDetail[] = [];
  @Input()
  orderDetail: OrderDetail = {};
  @Output()
  orderDetailChange: EventEmitter<OrderDetail> = new EventEmitter<OrderDetail>();

  constructor(private orderDetailService: OrderDetailService,
              private orderService: OrderService) {
  }

  ngOnInit(): void {
    console.log(this.orderDetail);
    console.log(this.orderDetail.product);
  }

  update(): void {
    this.orderDetailChange.emit(this.orderDetail);
  }

  // findOrderDetailList(): void {
  //   this.orderDetailService.findAll().subscribe(orderDetailList => {
  //     this.orderDetailList = orderDetailList;
  //   });
  // }

  deleteOrderDetail(id: number): void {
    this.orderDetailService.deleteOrderDetail(id).subscribe(() => {
      window.location.reload();
    });
  }
}
