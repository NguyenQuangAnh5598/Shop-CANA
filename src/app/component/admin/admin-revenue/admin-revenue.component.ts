import {Component, OnInit, ViewChild} from '@angular/core';
import {OrderService} from '../../../service/order.service';
import {Order} from '../../../model/Order';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {DateTimeDTO} from '../../../model/DateTimeDTO';

@Component({
  selector: 'app-admin-revenue',
  templateUrl: './admin-revenue.component.html',
  styleUrls: ['./admin-revenue.component.scss']
})
export class AdminRevenueComponent implements OnInit {
  status: string;
  check: boolean;
  count = 0;
  dateTimeDTO: DateTimeDTO = {};
  orderList: Order[];
  displayedColumns: string[] = ['name', 'totalprice', 'time', 'action'];
  dataSource: any;
  totalPrice = 0;
  startDate: any;
  endDate: any;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private orderService: OrderService) {
  }

  ngOnInit(): void {
    this.findCompletedOrderList();
  }

  findCompletedOrderList(): void {
    this.check = true;
    console.log(this.check);
    this.status = 'Total Income';
    this.orderService.findAllOrderByStatusId(4).subscribe(data => {
      this.orderList = data;
      console.log(this.orderList);
      this.count = this.orderList.length;
      this.dataSource = new MatTableDataSource<Order>(this.orderList);
      this.dataSource.paginator = this.paginator;
      this.totalPrice = 0;
      this.getSumOfOrderTotalPrice();
    });
  }

  getSumOfOrderTotalPrice(): void {
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.orderList.length; i++) {
      this.totalPrice += this.orderList[i].totalPrice;
      console.log(this.totalPrice);
    }
  }

  getOrderListByDate(): void {
    this.status = 'Total Income';
    this.dateTimeDTO.startDate = this.startDate;
    this.dateTimeDTO.endDate = this.endDate;
    console.log(this.dateTimeDTO);
    this.orderService.getOrderByTime(this.dateTimeDTO).subscribe(data => {
      this.orderList = data;
      this.dataSource = new MatTableDataSource<Order>(data);
      this.dataSource.paginator = this.paginator;
      console.log(this.dataSource);
      this.totalPrice = 0;
      this.count = 0;
      this.getSumOfOrderTotalPrice();
      this.count = this.orderList.length;
      console.log('avdfadsfdsafsea' + this.count);
    });
  }

  getOrderCancelListByDate(): void {
    this.status = 'Total';
    this.dateTimeDTO.startDate = this.startDate;
    this.dateTimeDTO.endDate = this.endDate;
    console.log(this.dateTimeDTO);
    this.orderService.getOrderCancelByTime(this.dateTimeDTO).subscribe(data => {
      this.orderList = data;
      this.dataSource = new MatTableDataSource<Order>(data);
      this.dataSource.paginator = this.paginator;
      console.log(this.dataSource);
      this.totalPrice = 0;
      this.count = 0;
      this.count = this.orderList.length;
      this.getSumOfOrderTotalPrice();
    });
  }

  findCancelOrderList(): void {
    this.check = false;
    console.log(this.check);
    this.status = 'Total';
    this.orderService.findAllOrderByStatusId(5).subscribe(data => {
      this.orderList = data;
      console.log(this.orderList);
      this.count = this.orderList.length;
      this.dataSource = new MatTableDataSource<Order>(this.orderList);
      this.dataSource.paginator = this.paginator;
      this.totalPrice = 0;
      this.getSumOfOrderTotalPrice();
    });
  }

  onButtonClick($e): void {
    console.log($e);
    const clickedElement = $e.target;
    console.log(clickedElement);
    console.log($e.target.value);
    if (clickedElement.nodeName === 'A') {
      const isActivated = clickedElement.parentElement.querySelector('.active');
      if (isActivated) {
        isActivated.classList.remove('active');
      }

      // clickedElement.className = clickedElement.append(' active');
      clickedElement.className += ' active';
    }
  }

}
