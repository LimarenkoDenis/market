import { CartService } from './../../shared/services/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-btn',
  templateUrl: './cart-btn.component.html',
  styleUrls: ['./cart-btn.component.css']
})
export class CartBtnComponent implements OnInit {

  public cartQuantity: number;

  private _cartService: CartService;

  public constructor(_cartService: CartService) {
    this._cartService = _cartService;
  }

  public ngOnInit(): void {
    // this._cartService.getCartQuantity()
    // .subscribe((cartQuantity: number) => {
    //   console.log(cartQuantity);
    // });
    this._cartService.cardStream$$.subscribe(product => console.log(product))
    this._cartService.notebooks$.subscribe((product) => this._cartService.cardStream$$.next(product));
  }

}
