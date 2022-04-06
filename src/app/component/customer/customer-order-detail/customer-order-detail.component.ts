import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {OrderDetail} from '../../../model/OrderDetail';
import {OrderDetailService} from '../../../service/order-detail.service';
import {OrderService} from '../../../service/order.service';
import {Product} from '../../../model/Product';
import {ProductService} from '../../../service/product.service';


@Component({
  selector: 'app-customer-order-detail',
  templateUrl: './customer-order-detail.component.html',
  styleUrls: ['./customer-order-detail.component.scss']
})
export class CustomerOrderDetailComponent implements OnInit {
  product: Product = {};
  @Input()
  orderDetailList: OrderDetail[] = [];
  @Output()
  orderDetailChange: EventEmitter<OrderDetail> = new EventEmitter<OrderDetail>();
  constructor(private orderDetailService: OrderDetailService,
              private orderService: OrderService,
              private productService: ProductService) {
  }

  ngOnInit(): void {
  }

  update(orderDetail: OrderDetail): void {
    this.productService.findById(orderDetail.product.id).subscribe(data => {
      this.product = data;
    });
    if (orderDetail.orderQuantity > this.product.quantity){
      alert('Số lượng sản phẩm không đủ!!');
      orderDetail.orderQuantity = this.product.quantity;
    }else{
      this.orderDetailService.updateOrderDetail(orderDetail).subscribe();
      alert('Thay đổi số lượng thành công!');
    }
  }
  updateMinus(orderDetail: OrderDetail): void {
    orderDetail.orderQuantity = orderDetail.orderQuantity - 1;
    if (orderDetail.orderQuantity === 0){
      if (confirm('Bạn có muốn xóa sản phẩm này ko?') === true){
          this.deleteOrderDetail(orderDetail.id);
      }else{
        orderDetail.orderQuantity = 1;
      }
    }else{
      this.orderDetailService.updateOrderDetail(orderDetail).subscribe();
    }
  }
  updatePlus(orderDetail: OrderDetail): void {
    orderDetail.orderQuantity = orderDetail.orderQuantity + 1;
    this.productService.findById(orderDetail.product.id).subscribe(data => {
      this.product = data;
    });
    if (orderDetail.orderQuantity > this.product.quantity){
      alert('Số lượng sản phẩm không đủ!!');
      orderDetail.orderQuantity = this.product.quantity;
    }else{
      this.orderDetailService.updateOrderDetail(orderDetail).subscribe();
    }
  }
  deleteOrderDetail(id: number): void {
    this.orderDetailService.deleteOrderDetail(id).subscribe(() => {
      window.location.reload();
    });
  }
}
