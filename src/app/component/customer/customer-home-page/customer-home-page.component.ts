import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../../service/product.service';
import {Product} from '../../../model/Product';
import {OrderDetailService} from '../../../service/order-detail.service';
import {TokenService} from '../../../service/token.service';
import {Router} from '@angular/router';
import {OrderDetail} from '../../../model/OrderDetail';

@Component({
  selector: 'app-customer-home-page',
  templateUrl: './customer-home-page.component.html',
  styleUrls: ['./customer-home-page.component.scss']
})
export class CustomerHomePageComponent implements OnInit {
  productList: Product[] = [];
  orderDetail: OrderDetail = {};
  orderQuantity = 1;
  productId = 0;
  constructor(private orderDetailService: OrderDetailService,
              private tokenService: TokenService,
              private router: Router,
              private productService: ProductService) {
  }

  ngOnInit(): void {
    this.getTop3();
  }

  getTop3(): void {
    this.productService.getTop3Product().subscribe(data => {
      this.productList = data;
      console.log(this.productList);
      console.log(data);
    });
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
