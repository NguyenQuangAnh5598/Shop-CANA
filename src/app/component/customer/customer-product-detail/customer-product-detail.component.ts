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
  }

  ngOnInit(): void {
    this.findProductById();
  }

  createOrderDetail(): void {
    if (this.tokenService.getToken() != null) {
      this.orderDetail = {
        orderQuantity: this.orderQuantity,
        productId: this.productId,
      };
      console.log(this.orderDetail);
      this.orderDetailService.createNewOrderDetail(this.orderDetail).subscribe();
      alert('Thêm vào giỏ hàng thành công');
    }
    else {
      alert('Xin hãy đăng nhập');
      this.router.navigate(['/login']);
    }
  }
  findProductById(): void {
    this.productId = this.activatedRoute.snapshot.params.id;
    this.productService.findById(this.productId).subscribe(data => {
      this.product = data;
    });
  }
  checkQuantity(): void {
    if (this.orderQuantity > this.product.quantity){
      alert('Số lượng sản phẩm không đủ!!');
      this.orderQuantity = this.product.quantity;
    }
  }
}
