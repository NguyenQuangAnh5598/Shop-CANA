import {Component, OnInit} from '@angular/core';
import {Product} from '../../../model/Product';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {ProductService} from '../../../service/product.service';
import {CategoryService} from '../../../service/category.service';
import {Category} from '../../../model/Category';

@Component({
  selector: 'app-admin-edit-product',
  templateUrl: './admin-edit-product.component.html',
  styleUrls: ['./admin-edit-product.component.scss']
})
export class AdminEditProductComponent implements OnInit {
  productId = 2;
  product: Product = {};
  categoryList: Category[] = [];
  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private categoryService: CategoryService,
    private router: Router
  ) {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.productId = params.id;
      console.log('productId: ' + this.productId);
      this.productService.findById(this.productId).subscribe(product => {
        this.product = product;
      });
    });
  }

  ngOnInit(): void {
    this.categoryService.findAll().subscribe(data => {
      // @ts-ignore
      this.categoryList = data;
      console.log(this.categoryList);
    });
  }

  update(): void {
    this.productService.updateProduct(this.product).subscribe(product => {
      alert('Cập nhập thành công');
      this.router.navigate(['/admin-list-product']);
    });
  }

  uploadFile(event): void {
    this.product.image = event;
  }
}
