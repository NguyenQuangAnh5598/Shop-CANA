import {Component, OnInit} from '@angular/core';
import {OrderDetail} from '../../../model/OrderDetail';
import {OrderService} from '../../../service/order.service';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss']
})
export class OrderDetailComponent implements OnInit {
  orderDetailList: OrderDetail[] = [];
  orderId = 1;

  constructor(private orderService: OrderService,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.orderId = params.id;
      console.log('orderId ' + this.orderId);
    });
  }

  ngOnInit(): void {
    this.orderService.findAllByOrder(this.orderId).subscribe(data => {
      this.orderDetailList = data;
    });
  }

}
