import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment.prod';
import {OrderDetail} from '../model/OrderDetail';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Order} from '../model/Order';
import {DateTimeDTO} from '../model/DateTimeDTO';

const API_LOCAL = `${environment.API_LOCAL}`;

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient,
  ) {
  }

  findAllByOrder(id: number): Observable<OrderDetail[]> {
    return this.http.get<OrderDetail[]>(API_LOCAL + 'orderdetail/findAllByOrder/' + id);
  }

  payment(id: number | undefined): Observable<Order> {
    return this.http.put<Order>(API_LOCAL + 'order/payment/' + id, id);
  }

  checkOrder(id: number | undefined): Observable<any> {
    // @ts-ignore
    return this.http.put<any>(API_LOCAL + 'order/acceptOrder/' + id);
  }

  findAllOrderByStatusId(id: number): Observable<Order[]> {
    return this.http.get<Order[]>(API_LOCAL + 'order/findAllOrderByStatusId/' + id);
  }

  findAllOrderByUserIdAndStatusId(userId: number, statusId: number): Observable<Order[]> {
    return this.http.get<Order[]>(API_LOCAL + 'order/findAllOrderByUserIdAndStatusId/' + userId + '/' + statusId);
  }

  cancelOrderByOrderId(id: number): Observable<any> {
    return this.http.delete<any>(API_LOCAL + 'order/cancelOrder/' + id);
  }

  getOrderByTime(dateTimeDTO: DateTimeDTO): Observable<any> {
    console.log('aaaaaaaaaaaaaaa' + dateTimeDTO);
    return this.http.put<any>(API_LOCAL + 'order/statisticalOrderByTime', dateTimeDTO);
  }

  getOrderCancelByTime(dateTimeDTO: DateTimeDTO): Observable<any> {
    return this.http.put<any>(API_LOCAL + 'order/statisticalOrderCancelByTime', dateTimeDTO);
  }
}
