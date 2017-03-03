import { LoginService } from './shared/services/login.service';
import { CartService } from './shared/services/cart.service';
import { AuthGuardService } from './shared/services/auth-guard.service';
import { ProductService } from './shared/services/product.service';

import { AngularFireModule } from 'angularfire2';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CarouselModule } from 'ng2-bootstrap/carousel';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';

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
    CartBtnComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(firebaseConfig),
    CarouselModule.forRoot()
  ],
  providers: [ProductService, LoginService, AuthGuardService, CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
