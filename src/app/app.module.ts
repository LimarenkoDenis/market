import { CartService } from './shared/services/cart.service';
import { AuthGuardService } from './shared/services/auth-guard.service';
import { LoginService } from './shared/services/login.service';
import { ProductService } from './shared/services/product.service';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AppRouting }  from './app.routes';
import { CarouselModule } from 'ng2-bootstrap/carousel';

import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductComponent } from './products/product-list/product/product.component';
import { ProductCreateComponent } from './products/product-create/product-create.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { OrdersComponent } from './orders/orders.component';
import { CartBtnComponent } from './orders/cart-btn/cart-btn.component';

const firebaseConfig = {
    apiKey: 'AIzaSyDosbaYVzyWWZ3rQ_lk408jgYbvTnir-H0',
    authDomain: 'project-250ce.firebaseapp.com',
    databaseURL: 'https://project-250ce.firebaseio.com',
    storageBucket: 'project-250ce.appspot.com',
    messagingSenderId: '599921874800'
};

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    ProductDetailComponent,
    ProductListComponent,
    ProductComponent,
    ProductCreateComponent,
    AdminComponent,
    LoginComponent,
    OrdersComponent,
    CartBtnComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRouting,
    AngularFireModule.initializeApp(firebaseConfig),
    CarouselModule.forRoot()
  ],
  providers: [ProductService, LoginService, AuthGuardService, CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
