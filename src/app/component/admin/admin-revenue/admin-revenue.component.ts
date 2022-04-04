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
  dateTimeDTO: DateTimeDTO = {};
  orderList: Order[] = [];
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
    this.orderService.findAllOrderByStatusId(4).subscribe(data => {
      this.orderList = data;
      console.log(this.orderList);
      this.dataSource = new MatTableDataSource<Order>(this.orderList);
      this.dataSource.paginator = this.paginator;
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
    this.dateTimeDTO.startDate = this.startDate;
    this.dateTimeDTO.endDate = this.endDate;
    console.log(this.dateTimeDTO);
    this.orderService.getOrderByTime(this.dateTimeDTO).subscribe(data => {
      this.dataSource = new MatTableDataSource<Order>(data);
      this.dataSource.paginator = this.paginator;
      console.log(this.dataSource);
    });
  }
}
