import {Component, Input, OnInit} from '@angular/core';
import {OrderDetail} from '../../../model/OrderDetail';
import {Product} from '../../../model/Product';
import {OrderDetailService} from '../../../service/order-detail.service';
import {TokenService} from '../../../service/token.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-customer-product',
  templateUrl: './customer-product.component.html',
  styleUrls: ['./customer-product.component.scss']
})
export class CustomerProductComponent implements OnInit {
  orderDetail: OrderDetail = {};
  orderQuantity = 1;
  productId = 1;
  @Input()
  product: Product;

  constructor(private orderDetailService: OrderDetailService,
              private tokenService: TokenService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  createOrderDetail(productId: number): void {
    if (this.tokenService.getToken() != null) {
      this.productId = productId;
      console.log(productId);
      console.log(this.productId);
      this.orderDetail = {
        orderQuantity: this.orderQuantity,
        productId: this.productId,
      };
      console.log(this.orderDetail);
      this.orderDetailService.createNewOrderDetail(this.orderDetail).subscribe();
      alert('Thêm vào rỏ hàng thành công');
    } else {
      alert('Xin hãy đăng nhập');
      this.router.navigate(['/login']);
    }
  }
}
