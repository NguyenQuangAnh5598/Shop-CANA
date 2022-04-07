import { Component, OnInit } from '@angular/core';
import {OrderDetail} from '../../../model/OrderDetail';
import {OrderService} from '../../../service/order.service';
import {ActivatedRoute, Params} from '@angular/router';
import {TokenService} from '../../../service/token.service';

@Component({
  selector: 'app-admin-order-detail-list',
  templateUrl: './admin-order-detail-list.component.html',
  styleUrls: ['./admin-order-detail-list.component.scss']
})
export class AdminOrderDetailListComponent implements OnInit {
  orderDetailList: OrderDetail[] = [];
  orderId = 1;
  p = 1;

  constructor(private orderService: OrderService,
              private activatedRoute: ActivatedRoute,
              private tokenService: TokenService) {
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
