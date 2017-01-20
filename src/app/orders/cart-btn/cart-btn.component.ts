import { CartService } from './../../shared/services/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-btn',
  templateUrl: './cart-btn.component.html',
  styleUrls: ['./cart-btn.component.css']
})
export class CartBtnComponent implements OnInit {

  public cartQuantity: number;

  constructor(private _CartService: CartService) { }

  ngOnInit() {
    this._CartService.getCartQuantity()
    .subscribe(cartQuantity => {
      console.log(cartQuantity);
    });
  }

}
