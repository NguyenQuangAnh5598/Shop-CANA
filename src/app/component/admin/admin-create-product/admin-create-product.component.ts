import {Component, OnInit} from '@angular/core';
import {Category} from '../../../model/Category';
import {ProductService} from '../../../service/product.service';
import {Router} from '@angular/router';
import {CategoryService} from '../../../service/category.service';
import {Product} from '../../../model/Product';

@Component({
  selector: 'app-admin-create-product',
  templateUrl: './admin-create-product.component.html',
  styleUrls: ['./admin-create-product.component.scss']
})
export class AdminCreateProductComponent implements OnInit {
  product: Product = {
    name: '',
    image: '',
    price: 0,
    quantity: 0,
    manufacturer: '',
    description: '',
    // @ts-ignore
    category: Category
  };

  form: any = {};
  categoryList: Category[] = [];

  constructor(private productService: ProductService,
              private router: Router,
              private categoryService: CategoryService) {
  }

  ngOnInit(): void {
    this.categoryService.findAll().subscribe(data => {
      // @ts-ignore
      this.categoryList = data;
      console.log(this.categoryList);
    });
  }

  createNewProduct(): void {
    this.product = {
      name: this.form.name,
      image: this.form.image,
      price: this.form.price,
      quantity: this.form.quantity,
      manufacturer: this.form.manufacturer,
      description: this.form.description,
      category: {
        id: this.form.category
      }
    };
    console.log(this.form.category);
    this.productService.createNewProduct(this.product).subscribe(() => {
      this.router.navigate(['/admin-home/admin-list-product']);
    });
  }

  uploadFile(event): void {
    this.form.image = event;
  }
  checkQuantity(value: any): void {
    if (value < 0){
      this.form.quantity = null;
    }
  }

  checkPrice(value: any): void {
    if (value < 0){
      this.form.price = null;
    }
  }
}
