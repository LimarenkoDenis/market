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
    ProductCreateComponent
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
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
