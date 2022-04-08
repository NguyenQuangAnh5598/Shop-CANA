import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment.prod';
import {Category} from '../model/Category';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

const API_LOCAL = `${environment.API_LOCAL}`;

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) {
  }

  findAll(): Observable<Category[]> {
    return this.http.get<Category[]>(API_LOCAL + 'categories');
  }
  findCategoryById(id: number): Observable<Category>{
    return this.http.get<Category>(API_LOCAL + 'categories/' + id);
  }
}
