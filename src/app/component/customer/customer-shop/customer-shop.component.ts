import {Component, OnInit} from '@angular/core';
import {Product} from '../../../model/Product';
import {ProductService} from '../../../service/product.service';

@Component({
  selector: 'app-customer-shop',
  templateUrl: './customer-shop.component.html',
  styleUrls: ['./customer-shop.component.scss']
})
export class CustomerShopComponent implements OnInit {
  productList: Product[] = [];
  page: any;

  count: any;

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    // this.showAllProduct();
    this.showAllProductByPage2();
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
