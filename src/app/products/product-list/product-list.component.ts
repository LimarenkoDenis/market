import { CartService } from './../../shared/services/cart.service';
import { ProductService } from './../../shared/services/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {

  // add type
  public products;

  constructor(private _ProductService: ProductService, private _CartService: CartService) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this._ProductService.getProducts()
    .subscribe(
      products => this.products = products,
      error => console.log(error)
    );
  }

  addToCart(product) {
    this._CartService.addToCart(product);
  }
}