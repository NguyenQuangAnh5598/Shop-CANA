import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Product} from '../../../model/Product';
import {ProductService} from '../../../service/product.service';
import {CategoryService} from '../../../service/category.service';
import {Category} from '../../../model/Category';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-customer-shop',
  templateUrl: './customer-shop.component.html',
  styleUrls: ['./customer-shop.component.scss']
})
export class CustomerShopComponent implements OnInit {
  list = [{id: 1, price: '10 - 20'},
    {id: 2, price: '20 - 30'},
    {id: 3, price: '30 - 50'},
    {id: 4, price: '50 - 100'},
    {id: 5, price: '100 - 500'}];
  a = [];
  p = 1;
  productList: Product[] = [];
  page: any;
  search: any;
  count: any;
  categoryList: Category[] = [];
  id = '';
  searchText = '';
  minPrice = '';
  maxPrice = '';

  constructor(private productService: ProductService,
              private categoryService: CategoryService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {


    // this.showAllProduct();
    // this.showAllProductByPage2();
    this.showCategory();
    // this.showProductByName();
    this.showAllProduct();
  }

  showCategory(): void {
    this.categoryService.findAll().subscribe(categoryList => {
      this.categoryList = categoryList;
    });
  }

  onChangeDefault(event: any): void {
    this.maxPrice = '';
    this.minPrice = '';
    this.productService.findByName(this.searchText, this.id, this.minPrice, this.maxPrice).subscribe(data => {
      this.productList = data;
    });
  }

  searchByPrice(event: any): void {
    if (event.target.checked) {
      this.a = event.target.value.split('-');
      // a = event.target.value
      this.minPrice = this.a[0];
      this.maxPrice = this.a[1];
      this.productService.findByName(this.searchText, this.id, this.minPrice, this.maxPrice).subscribe(data => {
        this.productList = data;
      });
    } else {
      this.maxPrice = '';
      this.minPrice = '';
    }
  }

  change(e): void {
    if (e.target.value === '0') {
      this.id = '';
      this.productService.findByName(this.searchText, this.id, this.minPrice, this.maxPrice).subscribe(productList => {
        this.productList = productList;
      });
    } else {
      this.id = e.target.value;
      this.productService.findByName(this.searchText, this.id, this.minPrice, this.maxPrice).subscribe(productList => {
        this.productList = productList;
      });
    }
  }

  showAllProduct(): void {
    this.productService.findAll().subscribe(productList => {
      this.productList = productList;
    });
  }
  // showAllProductByPage2(s?: any): void {
  //   let pageNum;
  //   if (s != null) {
  //     pageNum = '?page=' + s;
  //   } else {
  //     pageNum = '';
  //   }
  //   this.productService.showAllProductByPage(pageNum).subscribe(data => {
  //     this.productList = data.content;
  //     this.page = data;
  //     // tslint:disable-next-line:radix
  //     this.count = parseInt(String(data.number / 3)) * 3;
  //   });
  // }
}
