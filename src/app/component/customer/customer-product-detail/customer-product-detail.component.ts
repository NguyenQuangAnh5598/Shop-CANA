import {Component, OnInit} from '@angular/core';
import {OrderDetail} from '../../../model/OrderDetail';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {ProductService} from '../../../service/product.service';
import {OrderDetailService} from '../../../service/order-detail.service';
import {Product} from '../../../model/Product';
import {TokenService} from '../../../service/token.service';
import {EmitService} from '../../../service/emit.service';
import {CountChangeDTO} from '../../../model/CountChangeDTO';

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
              private emitService: EmitService,
              private router: Router) {

    this.activatedRoute.params.subscribe((params: Params) => {
      this.productId = params.id;
      productService.findById(this.productId).subscribe(data =>
        this.product = data);
    });
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
      this.orderDetailService.createNewOrderDetail(this.orderDetail).subscribe(data => {
        const countChange = new CountChangeDTO();
        countChange.id = data.id;
        countChange.status = true;
        this.emitService.emitChange(countChange);
      });
      alert('Thêm vào rỏ hàng thành công');
    } else {
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
    if (this.orderQuantity > this.product.quantity) {
      alert('Số lượng sản phẩm không đủ!!');
      this.orderQuantity = this.product.quantity;
    }
  }
}
