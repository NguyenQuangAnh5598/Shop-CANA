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
import {FormsModule} from '@angular/forms';
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
import { Ng2SearchPipeModule } from 'ng2-search-filter';

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
    CustomerChangePasswordComponent
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
      Ng2SearchPipeModule
    ],
  providers: [httpInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule {
}
