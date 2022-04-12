import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../service/product.service';
import {Product} from '../../model/Product';
import {OrderService} from '../../service/order.service';
import {TokenService} from '../../service/token.service';
import {UserService} from '../../service/user.service';
import {Order} from '../../model/Order';
import {OrderDetail} from '../../model/OrderDetail';
import {EmitService} from '../../service/emit.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  orderDetail: OrderDetail;
  count: number;
  orderDetailList: OrderDetail[] = [];
  userId: number;
  orderId: number;
  searchText = '';
  child ?: any;
  id = '';
  minPrice = '';
  maxPrice = '';

  constructor(private productService: ProductService,
              private orderService: OrderService,
              private tokenService: TokenService,
              private userService: UserService,
              private emitService: EmitService,
  ) {
    this.emitService.changeEmitted$.subscribe(data => {
      console.log(data);
      this.onchange(data);
    });
  }

  ngOnInit(): void {
    this.getCurrentOrderDetailList();
  }

  searchName(value): void {
    this.searchText = value;
    this.productService.findByName(this.searchText, this.child.id, this.child.minPrice, this.child.maxPrice).subscribe(productList => {
      this.child.productList = productList;
    });
  }

  Onactivate(child): void {
    // this.showAllProductByPage2(id);
    // this.showProductByName(id);
    this.child = child;
  }

  getCurrentOrderDetailList(): void {
    if (this.tokenService.getToken() != null) {
      this.userId = this.tokenService.getUserId();
      this.userService.findCurrentOrder(this.userId).subscribe(data => {
        this.orderService.findAllByOrder(data.id).subscribe(orderDetailList => {
          this.orderDetailList = orderDetailList;
          this.count = orderDetailList.length;
        });
      });
    }
  }

  onchange(data: any): void{
    if (data.id == null) {
      this.count++;
    }else if (data.status === 'minus') {
      this.count--;
    }else if (data.status === 'payment') {
      this.count = 0;
    }
  }
}
