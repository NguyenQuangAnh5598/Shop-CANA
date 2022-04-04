import {Component, OnInit, ViewChild} from '@angular/core';
import {Product} from '../../../model/Product';
import {ProductService} from '../../../service/product.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-admin-list-product',
  templateUrl: './admin-list-product.component.html',
  styleUrls: ['./admin-list-product.component.scss']
})
export class AdminListProductComponent implements OnInit {
  displayedColumns: string[] = ['name', 'image', 'price', 'quantity', 'manufacturer', 'description', 'category', 'action'];
  dataSource: any;
  productList: Product[] = [];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    this.findProductList();
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
  deleteProduct(id: number) {
    this.productService.deleteProduct(id).subscribe(() => {
      this.findProductList();
      }
    );
  }
}
