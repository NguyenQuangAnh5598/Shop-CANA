import {Component, OnInit} from '@angular/core';
import {OrderDetail} from '../../../model/OrderDetail';
import {OrderService} from '../../../service/order.service';
import {ActivatedRoute, Params} from '@angular/router';
import {TokenService} from '../../../service/token.service';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss']
})
export class OrderDetailComponent implements OnInit {
  check: string;
  status: string;
  orderDetailList: OrderDetail[] = [];
  orderId = 1;
  p = 1;

  constructor(private orderService: OrderService,
              private activatedRoute: ActivatedRoute,
              private tokenService: TokenService) {
    this.check = this.tokenService.getName();
    // tslint:disable-next-line:triple-equals
    if (this.check != 'ADMIN123') {
      this.status = '/home/customer-list-order';
    }else {
      this.status = '/admin-home/admin-revenue';
    }
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
