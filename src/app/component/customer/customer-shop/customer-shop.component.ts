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
  productList: Product[] = [];
  page: any;
  search: any ;
  count: any;
  categoryList: Category[] = [];
  id = '';
  searchText = '';
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
  change(e): void{
    this.id = e.target.value;
    // console.log(e);
    this.productService.findByName(this.searchText, this.id).subscribe(productList => {
      this.productList = productList;
    });
  }
  showAllProduct(): void {
    this.productService.findByName(this.searchText, this.id).subscribe(productList => {
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
