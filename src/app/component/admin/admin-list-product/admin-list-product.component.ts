import {Component, OnInit, ViewChild} from '@angular/core';
import {Product} from '../../../model/Product';
import {ProductService} from '../../../service/product.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {Category} from '../../../model/Category';
import {CategoryService} from '../../../service/category.service';

@Component({
  selector: 'app-admin-list-product',
  templateUrl: './admin-list-product.component.html',
  styleUrls: ['./admin-list-product.component.scss']
})
export class AdminListProductComponent implements OnInit {
  productId: any;
  searchText = '';
  minPrice = '';
  maxPrice = '';
  categoryId = '';
  displayedColumns: string[] = ['name', 'image', 'price', 'quantity', 'manufacturer', 'description', 'category', 'action'];
  dataSource: any;
  productList: Product[] = [];
  categoryList: Category[] = [];
  selectedValue ?: string;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private productService: ProductService,
              private categoryService: CategoryService) {
  }

  ngOnInit(): void {
    this.findProductList();
    this.showCategory();
  }

  findProductList(): void {
    this.productService.findAll().subscribe(productList => {
      this.productList = productList;
      this.dataSource = new MatTableDataSource<Product>(this.productList);
      console.log(this.dataSource);
      this.dataSource.paginator = this.paginator;
    });
  }

  // tslint:disable-next-line:typedef
  deleteProduct() {
    this.productService.deleteProduct(this.productId).subscribe(() => {
        this.findProductList();
      }
    );
  }

  searchProduct(): void {
    if (this.selectedValue > '0') {
      this.categoryId = this.selectedValue;
    } else {
      this.categoryId = '';
    }
    console.log(this.searchText, this.minPrice, this.maxPrice, this.categoryId);
    this.productService.findByName(this.searchText, this.categoryId, this.minPrice, this.maxPrice).subscribe(productList => {
      this.productList = productList;
      this.dataSource = new MatTableDataSource<Product>(this.productList);
      console.log(this.dataSource);
      this.dataSource.paginator = this.paginator;
    });
  }

  showCategory(): void {
    this.categoryService.findAll().subscribe(categoryList => {
      this.categoryList = categoryList;
    });
  }

  setData(id: any): void {
this.productId = id;
  }
}
