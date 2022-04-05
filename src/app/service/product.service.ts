import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment.prod';
import {Product} from '../model/Product';

const API_LOCAL = `${environment.API_LOCAL}`;

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http: HttpClient) {
  }

  findAll(): Observable<Product[]> {
    return this.http.get<Product[]>(API_LOCAL + 'product');
  }

  createNewProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(API_LOCAL + 'product', product);
  }

  updateProduct(product: Product): Observable<Product> {
    return this.http.put<Product>(API_LOCAL + 'product', product);
  }
  findByName(name: string, id: any, minPrice: any, maxPrice: any): Observable<Product[]> {
    return this.http.get<Product[]>(API_LOCAL + 'product/searchProduct?name=' + name + '&&id=' + id + '&&minPrice=' + minPrice + '&&maxPrice=' + maxPrice);
  }

  findById(id: number): Observable<Product> {
    return this.http.get<Product>(API_LOCAL + 'product/' + id);
  }

  // tslint:disable-next-line:typedef
  deleteProduct(id: number){
    return this.http.delete(API_LOCAL + 'product/' + id);
  }

  showAllProductByPage(pageNum: string): Observable<any> {
    return this.http.get<any>(API_LOCAL + 'product/page' + pageNum);
  }
}
