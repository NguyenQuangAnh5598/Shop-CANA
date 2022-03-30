import {Component, OnInit, ViewChild} from '@angular/core';
import {User} from '../../../model/User';
import {UserService} from '../../../service/user.service';
import {Router} from '@angular/router';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {Product} from '../../../model/Product';

@Component({
  selector: 'app-admin-list-customer',
  templateUrl: './admin-list-customer.component.html',
  styleUrls: ['./admin-list-customer.component.scss']
})
export class AdminListCustomerComponent implements OnInit {

  displayedColumns: string[] = ['username', 'avatar', 'name', 'dob', 'email', 'phone', 'address', 'action'];
  dataSource: any;
  userList: User[] = [];
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private userService: UserService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.findUserList();
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
    this.router.navigate(['/admin-profile-customer', id]);
  }
}
