import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './component/home/home.component';
import {CustomerHomePageComponent} from './component/customer/customer-home-page/customer-home-page.component';
import {AuthGuard} from './security/auth.guard';
import {CustomerShopComponent} from './component/customer/customer-shop/customer-shop.component';
import {CustomerProductDetailComponent} from './component/customer/customer-product-detail/customer-product-detail.component';
import {LoginComponent} from './component/signup-login/login/login.component';
import {SignupComponent} from './component/signup-login/signup/signup.component';
import {AdminListProductComponent} from './component/admin/admin-list-product/admin-list-product.component';
import {AdminListCustomerComponent} from './component/admin/admin-list-customer/admin-list-customer.component';
import {AdminProfileCustomerComponent} from './component/admin/admin-profile-customer/admin-profile-customer.component';
import {CustomerProfileComponent} from './component/customer/customer-profile/customer-profile.component';
import {CustomerPaymentComponent} from './component/customer/customer-payment/customer-payment.component';
import {CustomerChangePasswordComponent} from './component/customer/customer-change-password/customer-change-password.component';
import {AdminCheckOrderComponent} from './component/admin/admin-check-order/admin-check-order.component';
import {CustomerListOrderComponent} from './component/customer/customer-list-order/customer-list-order.component';
import {OrderDetailComponent} from './component/customer/order-detail/order-detail.component';
import {AdminHomeComponent} from './component/admin/admin-home/admin-home.component';
import {AdminCreateProductComponent} from './component/admin/admin-create-product/admin-create-product.component';
import {AdminRevenueComponent} from './component/admin/admin-revenue/admin-revenue.component';
import {AdminCheckCompletedOrderComponent} from './component/admin/admin-check-completed-order/admin-check-completed-order.component';
import {AdminEditProductComponent} from './component/admin/admin-edit-product/admin-edit-product.component';

import {AdminOrderDetailListComponent} from './component/admin/admin-order-detail-list/admin-order-detail-list.component';
import {AdminGuard} from './security/admin.guard';
import {Error403Component} from './component/error403/error403.component';

import {EmailForgotPasswordComponent} from './component/email-forgot-password/email-forgot-password.component';


const routes: Routes = [{
  path: '',
  redirectTo: 'home',
  pathMatch: 'full'
},
  {
    path: 'home', component: HomeComponent,
    children: [
      {path: '', component: CustomerHomePageComponent},
      {path: 'customer-payment', canActivate: [AuthGuard], component: CustomerPaymentComponent},
      {path: 'customer-shop', component: CustomerShopComponent},
      {path: 'customer-product-detail/:id', component: CustomerProductDetailComponent},
      {path: 'customer-profile', canActivate: [AuthGuard], component: CustomerProfileComponent},
      {path: 'customer-change-password', canActivate: [AuthGuard], component: CustomerChangePasswordComponent},
      {path: 'customer-list-order', canActivate: [AuthGuard], component: CustomerListOrderComponent},
      {path: 'order-detail/:id', canActivate: [AuthGuard], component: OrderDetailComponent}
    ]
  },
  {
    path: 'admin-home', canActivate: [AdminGuard], component: AdminHomeComponent,
    children: [
      {path: '', canActivate: [AdminGuard], component: AdminListCustomerComponent},
      {path: 'admin-list-product', canActivate: [AdminGuard], component: AdminListProductComponent},
      {path: 'admin-check-order', canActivate: [AdminGuard], component: AdminCheckOrderComponent},
      {path: 'admin-check-completed-order', canActivate: [AdminGuard], component: AdminCheckCompletedOrderComponent},
      {path: 'admin-create-product', canActivate: [AdminGuard], component: AdminCreateProductComponent},
      {path: 'admin-edit-product/:id', canActivate: [AdminGuard], component: AdminEditProductComponent},
      {path: 'admin-revenue', canActivate: [AdminGuard], component: AdminRevenueComponent},
      {path: 'admin-profile-customer/:id', canActivate: [AdminGuard], component: AdminProfileCustomerComponent},
      {path: 'admin-order-detail-list/:id', canActivate: [AdminGuard], component: AdminOrderDetailListComponent},
      {path: 'search-name-customer/:name', canActivate: [AdminGuard], component: AdminListCustomerComponent}
    ]
  },


  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'error', component: Error403Component},
  {path: 'forgot', component: EmailForgotPasswordComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
