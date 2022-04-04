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
    this.productService.findByName(this.searchText, this.child.id, this.child.minPrice, this.child.maxPrice).subscribe(productList => {
        this.child.productList = productList;
      });
  }
  Onactivate(id): void {
    // this.showAllProductByPage2(id);
    // this.showProductByName(id);
    this.child = id;
  }


}
