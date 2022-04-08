import {Component, OnInit, ViewChild} from '@angular/core';
import {User} from '../../../model/User';
import {UserService} from '../../../service/user.service';
import {ActivatedRoute, Router} from '@angular/router';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {Product} from '../../../model/Product';

@Component({
  selector: 'app-admin-list-customer',
  templateUrl: './admin-list-customer.component.html',
  styleUrls: ['./admin-list-customer.component.scss']
})
export class AdminListCustomerComponent implements OnInit {
  customerId: any;
  displayedColumns: string[] = ['username', 'avatar', 'name', 'dob', 'email', 'phone', 'address', 'action'];
  dataSource: any;
  userList: User[] = [];
  check: boolean;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private userService: UserService,
              private router: Router,
              private activeRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe(() => {
      this.showListUser();
    });
  }

  findUserList(): void {
    this.userService.findAll().subscribe(userList => {
      this.userList = userList;
      this.dataSource = new MatTableDataSource<Product>(this.userList);
      console.log(this.dataSource);
      this.dataSource.paginator = this.paginator;
    });
  }

  updateUser(id: number): void {
    this.router.navigate(['/admin-home/admin-profile-customer', id]);
  }

  // tslint:disable-next-line:typedef
  deleteCustomer() {
    this.userService.deleteCustomer(this.customerId).subscribe(() => {
        this.findUserList();
      }
    );
  }

  searchByName(): void {
    const name = this.activeRoute.snapshot.paramMap.get('name');
    if (name === '') {
      this.findUserList();
    } else {
      this.userService.searchUserByName(name).subscribe(data => {
        this.userList = data;
        this.dataSource = new MatTableDataSource<Product>(this.userList);
        console.log(this.dataSource);
        this.dataSource.paginator = this.paginator;
      });
    }
  }

  showListUser(): void {
    this.check = this.activeRoute.snapshot.paramMap.has('name');
    if (this.check) {
      this.searchByName();
    } else {
      this.findUserList();
    }
  }

  setData(id: any): void {
    this.customerId = id;
  }
}
