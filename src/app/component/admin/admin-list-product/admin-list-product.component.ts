import { Component, OnInit } from '@angular/core';
import {Product} from '../../../model/Product';
import {ProductService} from '../../../service/product.service';

@Component({
  selector: 'app-admin-list-product',
  templateUrl: './admin-list-product.component.html',
  styleUrls: ['./admin-list-product.component.scss']
})
export class AdminListProductComponent implements OnInit {

  productList: Product[] = [];


  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    this.findProductList();
  }

  findProductList(): void {
    this.productService.findAll().subscribe(productList => {
      this.productList = productList;
    });
  }

  // tslint:disable-next-line:typedef
  deleteProduct(id: number) {
    this.productService.deleteProduct(id).subscribe(() => {
      this.findProductList();
      }
    );
  }
}
