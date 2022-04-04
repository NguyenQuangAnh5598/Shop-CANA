import {Component, OnInit} from '@angular/core';
import {OrderDetail} from '../../../model/OrderDetail';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {ProductService} from '../../../service/product.service';
import {OrderDetailService} from '../../../service/order-detail.service';
import {Product} from '../../../model/Product';
import {TokenService} from '../../../service/token.service';

@Component({
  selector: 'app-customer-product-detail',
  templateUrl: './customer-product-detail.component.html',
  styleUrls: ['./customer-product-detail.component.scss']
})
export class CustomerProductDetailComponent implements OnInit {
  orderDetail: OrderDetail = {};

  productId = 2;
  orderQuantity = 1;
  product: Product = {};

  constructor(private productService: ProductService,
              private activatedRoute: ActivatedRoute,
              private orderDetailService: OrderDetailService,
              private tokenService: TokenService,
              private router: Router) {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.productId = params.get('id');
      productService.findById(this.productId).subscribe(data =>
        this.product = data);
    });
  }

  ngOnInit(): void {
  }

  createOrderDetail(): void {
    if (this.tokenService.getToken() != null) {
      this.orderDetail = {
        orderQuantity: this.orderQuantity,
        productId: this.productId,
      };
      console.log(this.orderDetail);
      this.orderDetailService.createNewOrderDetail(this.orderDetail).subscribe();
      alert('Thêm vào rỏ hàng thành công');
    }
    else {
      alert('Xin hãy đăng nhập');
      this.router.navigate(['/login']);
    }
  }
}
