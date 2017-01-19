import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  // add type
  @Input() product: any;
  @Output() addToCart = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  addProductToCart(product) {
    this.addToCart.emit(product);
  }
}
