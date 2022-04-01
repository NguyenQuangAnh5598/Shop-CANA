import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment.prod';
import {HttpClient} from '@angular/common/http';
import {OrderDetail} from '../model/OrderDetail';
import {Observable} from 'rxjs';

const API_LOCAL = `${environment.API_LOCAL}`;

@Injectable({
  providedIn: 'root'
})
export class OrderDetailService {

  constructor(private http: HttpClient) {
  }

  createNewOrderDetail(orderDetail: OrderDetail): Observable<OrderDetail> {
    return this.http.post<OrderDetail>(API_LOCAL + 'orderdetail', orderDetail);
  }

  updateOrderDetail(orderDetail: OrderDetail): Observable<OrderDetail> {
    return this.http.put<OrderDetail>(API_LOCAL + 'orderdetail', orderDetail);
  }

  findById(id: number): Observable<OrderDetail> {
    return this.http.get<OrderDetail>(API_LOCAL + 'orderdetail/' + id);
  }

  // findAll(): Observable<OrderDetail[]> {
  //   return this.http.get<OrderDetail[]>(API_LOCAL + 'orderdetail');
  // }

  // tslint:disable-next-line:typedef
  deleteOrderDetail(id: number){
    return this.http.delete(API_LOCAL + 'orderdetail/' + id);
  }
}
