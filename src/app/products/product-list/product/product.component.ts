import { CartService } from './../../../shared/services/cart.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  // add type
  @Input() product: any;

  constructor(private _CartService: CartService) { }

  ngOnInit() {
  }

  addToCart(product) {
    this._CartService.addToCart(product);
  }
}
