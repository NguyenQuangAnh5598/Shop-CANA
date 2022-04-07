import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment.prod';
import {UploadFileComponent} from './component/upload-file/upload-file.component';
import {FooterComponent} from './component/footer/footer.component';
import {NavbarComponent} from './component/navbar/navbar.component';
import {HomeComponent} from './component/home/home.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {httpInterceptorProvider} from './security/auth.interceptor';
import {SignupComponent} from './component/signup-login/signup/signup.component';
import {LoginComponent} from './component/signup-login/login/login.component';
import { MatFormFieldModule} from '@angular/material/form-field';
import {MatInput, MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CustomerHomePageComponent } from './component/customer/customer-home-page/customer-home-page.component';
import { CustomerOrderDetailComponent } from './component/customer/customer-order-detail/customer-order-detail.component';
import { CustomerPaymentComponent } from './component/customer/customer-payment/customer-payment.component';
import { CustomerProductComponent } from './component/customer/customer-product/customer-product.component';
import { CustomerProductDetailComponent } from './component/customer/customer-product-detail/customer-product-detail.component';
import { CustomerProfileComponent } from './component/customer/customer-profile/customer-profile.component';
import { CustomerShopComponent } from './component/customer/customer-shop/customer-shop.component';
import { AdminCheckCompletedOrderComponent } from './component/admin/admin-check-completed-order/admin-check-completed-order.component';
import { AdminCheckOrderComponent } from './component/admin/admin-check-order/admin-check-order.component';
import { AdminListProductComponent } from './component/admin/admin-list-product/admin-list-product.component';
import { AdminProfileCustomerComponent } from './component/admin/admin-profile-customer/admin-profile-customer.component';
import { AdminListCustomerComponent } from './component/admin/admin-list-customer/admin-list-customer.component';
import { CustomerChangePasswordComponent } from './component/customer/customer-change-password/customer-change-password.component';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { AdminNavbarComponent } from './component/admin/admin-navbar/admin-navbar.component';
import { CustomerListOrderComponent } from './component/customer/customer-list-order/customer-list-order.component';
import { OrderDetailComponent } from './component/customer/order-detail/order-detail.component';
import { AdminCreateProductComponent } from './component/admin/admin-create-product/admin-create-product.component';
import { AdminEditProductComponent } from './component/admin/admin-edit-product/admin-edit-product.component';
import { AdminRevenueComponent } from './component/admin/admin-revenue/admin-revenue.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { AdminHomeComponent } from './component/admin/admin-home/admin-home.component';
import {NgxPaginationModule} from 'ngx-pagination';

import {MatSelectModule} from '@angular/material/select';

import { AdminOrderDetailListComponent } from './component/admin/admin-order-detail-list/admin-order-detail-list.component';
import { Error403Component } from './component/error403/error403.component';

import { SearchCustomerNameComponent } from './component/admin/search-customer-name/search-customer-name.component';

import { EmailForgotPasswordComponent } from './component/email-forgot-password/email-forgot-password.component';



@NgModule({
  declarations: [
    AppComponent,
    UploadFileComponent,
    FooterComponent,
    NavbarComponent,
    HomeComponent,
    SignupComponent,
    LoginComponent,
    CustomerHomePageComponent,
    CustomerOrderDetailComponent,
    CustomerPaymentComponent,
    CustomerProductComponent,
    CustomerProductDetailComponent,
    CustomerProfileComponent,
    CustomerShopComponent,
    AdminCheckCompletedOrderComponent,
    AdminCheckOrderComponent,
    AdminListProductComponent,
    AdminProfileCustomerComponent,
    AdminListCustomerComponent,
    CustomerChangePasswordComponent,
    AdminNavbarComponent,
    CustomerListOrderComponent,
    OrderDetailComponent,
    AdminCreateProductComponent,
    AdminEditProductComponent,
    AdminRevenueComponent,
    AdminHomeComponent,
    AdminOrderDetailListComponent,
    Error403Component,
    SearchCustomerNameComponent,
    EmailForgotPasswordComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        RouterModule,
        AngularFireStorageModule,
        HttpClientModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        FormsModule,
        AngularFireModule.initializeApp(environment.firebaseConfig),
        BrowserAnimationsModule,
        MatButtonModule,
        MatTableModule,
        MatPaginatorModule,
        MatDatepickerModule,
        MatNativeDateModule,
        ReactiveFormsModule,
        NgxPaginationModule,
        MatSelectModule

    ],
  providers: [httpInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule {
}
