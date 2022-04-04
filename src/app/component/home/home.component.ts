import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../service/product.service';
import {Product} from '../../model/Product';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  searchText = '';
  child ?: any;
  id = '';
  minPrice = '';
  maxPrice = '';
  constructor(private productService: ProductService
  ) { }
  ngOnInit(): void {
  }
  searchName(value): void{
    this.searchText = value;
    console.log(this.child.id, this.child.minPrice, this.child.maxPrice, this.searchText);
    this.productService.findByName(this.searchText, this.child.id, this.child.minPrice, this.child.maxPrice).subscribe(productList => {
        this.child.productList = productList;
      });
  }
  Onactivate(id): void {
    // this.showAllProductByPage2(id);
    // this.showProductByName(id);
    this.child = id;
  }
  // showProductByName(id): void{
  //   this.productService.findByName(this.searchText).subscribe(productList => {
  //     id.productList = productList;
  //   });
  // }
  // showAllProductByPage2(a?: any, s?: any): void {
  //   let pageNum;
  //   if (s != null) {
  //     pageNum = '?page=' + s;
  //   } else {
  //     pageNum = '';
  //   }
  //   this.productService.showAllProductByPage(pageNum).subscribe(data => {
  //     a.productList = data.content;
  //     a.page = data;
  //     // tslint:disable-next-line:radix
  //     a.count = parseInt(String(data.number / 3)) * 3;
  //   });
  // }


}
