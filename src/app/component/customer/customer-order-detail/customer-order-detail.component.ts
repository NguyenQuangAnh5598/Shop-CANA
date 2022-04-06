import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {OrderDetail} from '../../../model/OrderDetail';
import {OrderDetailService} from '../../../service/order-detail.service';
import {OrderService} from '../../../service/order.service';
import {Product} from '../../../model/Product';
import {ProductService} from '../../../service/product.service';
import {EmitService} from '../../../service/emit.service';
import {CountChangeDTO} from '../../../model/CountChangeDTO';


@Component({
  selector: 'app-customer-order-detail',
  templateUrl: './customer-order-detail.component.html',
  styleUrls: ['./customer-order-detail.component.scss']
})
export class CustomerOrderDetailComponent implements OnInit {
  product: Product = {};
  @Input()
  orderDetailList: OrderDetail[] = [];

  constructor(private orderDetailService: OrderDetailService,
              private orderService: OrderService,
              private productService: ProductService,
              private emitService: EmitService) {
  }

  ngOnInit(): void {
  }

  update(orderDetail: OrderDetail): void {
    this.productService.findById(orderDetail.product.id).subscribe(data => {
      this.product = data;
    });
    if (orderDetail.orderQuantity > this.product.quantity) {
      alert('Số lượng sản phẩm không đủ!!');
      orderDetail.orderQuantity = this.product.quantity;
    } else {
      this.orderDetailService.updateOrderDetail(orderDetail).subscribe();
      alert('Thay đổi số lượng thành công!');
    }
  }

  updateMinus(orderDetail: OrderDetail, index: any): void {
    orderDetail.orderQuantity = orderDetail.orderQuantity - 1;
    if (orderDetail.orderQuantity === 0) {
      if (confirm('Bạn có muốn xóa sản phẩm này ko?') === true) {
        this.deleteOrderDetail(orderDetail.id, index);
      } else {
        orderDetail.orderQuantity = 1;
      }
    } else {
      this.orderDetailService.updateOrderDetail(orderDetail).subscribe();
    }
  }

  updatePlus(orderDetail: OrderDetail): void {
    orderDetail.orderQuantity = orderDetail.orderQuantity + 1;
    this.productService.findById(orderDetail.product.id).subscribe(data => {
      this.product = data;
    });
    if (orderDetail.orderQuantity > this.product.quantity) {
      alert('Số lượng sản phẩm không đủ!!');
      orderDetail.orderQuantity = this.product.quantity;
    } else {
      this.orderDetailService.updateOrderDetail(orderDetail).subscribe();
    }
  }

  deleteOrderDetail(id: number, index: any): void {
    this.orderDetailService.deleteOrderDetail(id).subscribe(() => {
      const countChange = new CountChangeDTO();
      countChange.id = 1;
      countChange.status = 'minus';
      this.emitService.emitChange(countChange);
    });
    this.orderDetailList.splice(index, 1);
  }
}
