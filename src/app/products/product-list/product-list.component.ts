import { CartService } from './../../shared/services/cart.service';
import { ProductService } from './../../shared/services/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {

  public products: Product[];

  public constructor(
    private _productService: ProductService,
    private _cartService: CartService
  ) {}

  public ngOnInit(): void {
    this.getProducts();
  }

  public getProducts(): void {
    this._productService.getProducts().subscribe((products: Product[]) => this.products = products);
  }
  // to-do fix
  public addToCart(product: Product): void {
    this._cartService.cardStream$$.next(product);
    this._cartService.addToCart(product);
  }

  public noop(product: string): void {}
}
