import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import firebase from 'firebase';
import {CategoryService} from '../../service/category.service';
import {Category} from '../../model/Category';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Output() searchByname = new EventEmitter();
  searchText;

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
  }
  searchProductByname(): void {
    this.searchByname.emit(this.searchText);
  }



}
