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
  id: any;
  index: any;
  @Output()
  orderDelete = new EventEmitter();
  @Input()
  orderDetailList: OrderDetail[] = [];
  @Output()
  orderDetailListChange = new EventEmitter<any>();


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
      this.orderDetailService.updateOrderDetail(orderDetail).subscribe(data => {
        this.orderDetailListChange.emit(data);
      });
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
      this.orderDetailService.updateOrderDetail(orderDetail).subscribe(
        data => {
          this.orderDetailListChange.emit(data);
        }
      );
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
      this.orderDetailService.updateOrderDetail(orderDetail).subscribe(data => {
        this.orderDetailListChange.emit(data);
      });
    }
  }

  deleteOrderDetail(id: number, index: any): void {
    this.orderDetailService.deleteOrderDetail(id).subscribe(() => {
      const countChange = new CountChangeDTO();
      countChange.id = 1;
      countChange.status = 'minus';
      this.emitService.emitChange(countChange);
      this.orderDelete.emit(index);
    });
    console.log(index);
    this.orderDetailList.splice(index, 1);
  }

  setData(id: number, i: number): void {
    this.id = id;
    this.index = i;
  }

  deleteOrder(): void {
    this.orderDetailService.deleteOrderDetail(this.id).subscribe(() => {
      const countChange = new CountChangeDTO();
      countChange.id = 1;
      countChange.status = 'minus';
      this.emitService.emitChange(countChange);
      this.orderDelete.emit();
    });
    console.log(this.index);
    this.orderDetailList.splice(this.index, 1);
  }
}
