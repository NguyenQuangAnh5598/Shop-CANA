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
      {path: 'order-detail/:id', component: OrderDetailComponent}

    ]
  },


  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'admin-list-product', component: AdminListProductComponent},
  {path: 'admin-list-customer', component: AdminListCustomerComponent},
  {path: 'admin-profile-customer/:id', component: AdminProfileCustomerComponent},
  {path: 'admin-check-order', component: AdminCheckOrderComponent},
  {path: 'admin-check-completed-order', component: AdminCheckOrderComponent},
  {path: 'customer-list-order', component: CustomerListOrderComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
