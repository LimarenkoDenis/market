import { AuthGuardService } from './shared/services/auth-guard.service';
import { AdminComponent } from './admin/admin.component';
import { ModuleWithProviders } from '@angular/core';
import { Routes } from '@angular/router';

import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { LayoutComponent } from './layout/layout.component';
import { ProductCreateComponent } from './products/product-create/product-create.component';
import { LoginComponent } from './login/login.component';
import { OrdersComponent } from './orders/orders.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: '', component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'products', pathMatch: 'full'},
      { path: 'products', component: ProductListComponent },
      { path: 'products/:productId', component: ProductDetailComponent },
      { path: 'product/create', component: ProductCreateComponent, canActivate: [ AuthGuardService ]},
      { path: 'orders', component: OrdersComponent },
      { path: 'admin', component: AdminComponent, canActivate: [ AuthGuardService ]}
    ]
  },
];
