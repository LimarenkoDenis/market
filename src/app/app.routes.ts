import { ModuleWithProviders }    from '@angular/core';
import { Routes, RouterModule }   from '@angular/router';

import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { LayoutComponent } from './layout/layout.component';
import { ProductCreateComponent } from './products/product-create/product-create.component';

const routes: Routes = [
     {
        path: '',
        component: LayoutComponent,
        children: [
          { path: '', redirectTo: 'products', pathMatch: 'full'},
          { path: 'products', component: ProductListComponent },
          { path: 'products/:productId', component: ProductDetailComponent },
          { path: 'product/create', component: ProductCreateComponent}
        ]
    },
];

export const AppRouting: ModuleWithProviders = RouterModule.forRoot(routes, {useHash: true});
