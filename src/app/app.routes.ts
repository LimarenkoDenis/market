import { AuthGuardService } from './shared/services/auth-guard.service';
import { ModuleWithProviders } from '@angular/core';
import { Routes } from '@angular/router';

import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { ProductCreateComponent } from './products/product-create/product-create.component';
import { ProductEditComponent } from './products/product-edit/product-edit.component';
import { OrdersComponent } from './orders/orders.component';

import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: '', component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'products', pathMatch: 'full'},
      { path: 'products', component: ProductListComponent },
      { path: 'products/:productId', component: ProductDetailComponent },
      { path: 'product/create',
        component: ProductCreateComponent,
        canActivate: [ AuthGuardService ],
        data: { roles: ['admin'] }
      },
      { path: 'products/:productId/edit',
        component: ProductEditComponent,
        canActivate: [ AuthGuardService ],
        data: { roles: ['admin'] }
      },
      { path: 'orders', component: OrdersComponent }
    ]
  },
  {  path: '**', redirectTo: 'products' }
];
