import {Component, OnInit, ViewChild} from '@angular/core';
import {OrderDetail} from '../../../model/OrderDetail';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {ProductService} from '../../../service/product.service';
import {OrderDetailService} from '../../../service/order-detail.service';
import {Product} from '../../../model/Product';
import {TokenService} from '../../../service/token.service';
import {EmitService} from '../../../service/emit.service';
import {CountChangeDTO} from '../../../model/CountChangeDTO';
import {User} from '../../../model/User';
import {UserService} from '../../../service/user.service';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {Commentt} from '../../../model/Commentt';

@Component({
  selector: 'app-customer-product-detail',
  templateUrl: './customer-product-detail.component.html',
  styleUrls: ['./customer-product-detail.component.scss']
})
export class CustomerProductDetailComponent implements OnInit {
  orderDetail: OrderDetail = {};
  error: any = {
    message: '403'
  };
  userId = -1;
  productId = 2;
  orderQuantity = 1;
  product: Product = {};
  commentList: Commentt[] = [];
  comment: Commentt;
  text = '';
  currentProductId: any;
  status = '';
  error1 = {
    message: 'NO'
  };
  dataSource: any;
  p = 1;
  avatar: string;
  tmp : any;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  form: any = {};

  constructor(private productService: ProductService,
              private activatedRoute: ActivatedRoute,
              private orderDetailService: OrderDetailService,
              private tokenService: TokenService,
              private emitService: EmitService,
              private userService: UserService,
              private router: Router) {

    this.activatedRoute.params.subscribe((params: Params) => {
      this.productId = params.id;
      productService.findById(this.productId).subscribe(data =>
        this.product = data);
    });
  }

  ngOnInit(): void {
    this.findProductById();
    this.findAllComment();
    this.avatar = this.tokenService.getAvatar();
    this.tmp = this.tokenService.getUserId();
  }

  createOrderDetail(): void {
    if (this.tokenService.getToken() != null) {
      this.orderDetail = {
        orderQuantity: this.orderQuantity,
        productId: this.productId,
      };
      console.log(this.orderDetail);
      this.orderDetailService.createNewOrderDetail(this.orderDetail).subscribe(data => {
        if (JSON.stringify(data) === JSON.stringify(this.error)) {
          this.router.navigate(['/error']);
        } else {
          const countChange = new CountChangeDTO();
          countChange.id = data.id;
          this.emitService.emitChange(countChange);
          alert('Thêm vào rỏ hàng thành công');
        }
      });
    } else {
      alert('Xin hãy đăng nhập');
      this.router.navigate(['/login']);
    }
  }

  findProductById(): void {
    this.productId = this.activatedRoute.snapshot.params.id;
    this.currentProductId = this.productId;
    this.productService.findById(this.productId).subscribe(data => {
      this.product = data;
    });
  }

  checkQuantity(): void {
    if (this.orderQuantity > this.product.quantity) {
      alert('Số lượng sản phẩm không đủ!!');
      this.orderQuantity = this.product.quantity;
    }
  }

  createNewComment(): void {
    console.log(this.text);
    console.log(this.commentList);
    if (this.tokenService.getToken() !== null){
      this.userId = this.tokenService.getUserId();
      this.userService.getUserById(this.userId).subscribe(data => {
        this.comment = {
          textt: this.text,
          productId: this.productId,
          user: data
        };
        console.log(this.comment);
        if (this.comment.textt !== '') {
          this.productService.createNewComment(this.comment).subscribe(() => {
            this.findAllComment();
            this.status = '';
            this.text = '';
          });
        } else {
          this.status = 'Comment can not empty!';
        }
      });
    } else {
      alert('Xin hãy đăng nhập');
      this.router.navigate(['/login']);
    }
  }

  findAllComment(): void {
    this.productService.findAllCommentByProductId(this.currentProductId).subscribe(commentList => {
      console.log(this.productId);
      this.commentList = commentList.reverse();
      this.dataSource = new MatTableDataSource<Commentt>(this.commentList);
      // console.log(this.dataSource);
      this.dataSource.paginator = this.paginator;
    });
  }

  clear(): void {
    this.text = '';
  }

  deleteComment(id: number, index: any): void {
    this.productService.deleteComment(id).subscribe(data => {
      if (JSON.stringify(data) === JSON.stringify(this.error1)) {
        alert('Can not delete!');
      } else {
        this.commentList.splice(index, 1);
      }
    });
  }
}
