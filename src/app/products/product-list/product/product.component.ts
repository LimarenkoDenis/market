import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  @Input()
  public product: Product;

  @Output()
  public addToCart: EventEmitter<Product> = new EventEmitter();

  public constructor() { }

  public addProductToCart(product: Product): void {
    this.addToCart.emit(product);
  }
}
