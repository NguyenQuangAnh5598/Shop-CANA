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
  list = [{ id : 1, price: '40000-50000'},
    { id : 2, price: '50000-60000'},
    { id : 3, price: '300-400'},
    { id : 4, price: '400-500'}];
  a = [];
  productList: Product[] = [];
  page: any;
  search: any ;
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
  showCategory(): void{
    this.categoryService.findAll().subscribe(categoryList => {
      this.categoryList = categoryList ;
    });
  }
  onChangeDefault(event: any): void{
    this.maxPrice = '';
    this.minPrice = '';
    this.productService.findByName(this.searchText, this.id, this.minPrice, this.maxPrice).subscribe(data => {
      this.productList = data;
    });
  }
  change(e): void{
    this.id = e.target.value;
    // console.log(e);
    if (this.id === '0'){
      this.productService.findByName(this.searchText, '', this.minPrice, this.maxPrice).subscribe(productList => {
        this.productList = productList;
      });
    }
    else{
      this.productService.findByName(this.searchText, this.id, this.minPrice, this.maxPrice).subscribe(productList => {
        this.productList = productList;
      });
    }
  }
  searchByPrice(event: any): void{
    if (event.target.checked){
      this.a = event.target.value.split('-');
      // a = event.target.value
      this.minPrice = this.a[0];
      this.maxPrice = this.a[1];
      this.productService.findByName(this.searchText, this.id, this.minPrice, this.maxPrice).subscribe(data => {
        this.productList = data;
      });
    }
    else{
      this.maxPrice = '';
      this.minPrice = '';
    }
  }
  showAllProduct(): void {
    this.productService.findAll().subscribe(productList => {
      this.productList = productList;
    });
  }
  // showAllProductByPage(pageNum: string): void {
  //   this.productService.showAllProductByPage(pageNum).subscribe(data => {
  //     this.productList = data.content;
  //     this.page = data;
  //     this.count = parseInt(String(data.number / 3)) * 3;
  //   });
  // }



  showProductByName(): void{

  }
  // ------------------

  // searchByCategory(): void{
  //   this.activatedRoute.queryParams.subscribe(data => {
  //     this.id = data.id;
  //   });
  //   this.productService.findByName(this.searchText, this.id).subscribe(productList => {
  //     this.productList = productList;
  //   });
  // }

  // ---------------
  showAllProductByPage2(s?: any): void {
    let pageNum;
    if (s != null) {
      pageNum = '?page=' + s;
    } else {
      pageNum = '';
    }
    this.productService.showAllProductByPage(pageNum).subscribe(data => {
      this.productList = data.content;
      this.page = data;
      // tslint:disable-next-line:radix
      this.count = parseInt(String(data.number / 3)) * 3;
    });
  }
}
