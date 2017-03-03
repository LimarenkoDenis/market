import { CartService } from './../shared/services/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  public orders: Product[] = [];

  private _cartService: CartService;

  public constructor(_cartService: CartService) {
    this._cartService = _cartService;
  }

  public ngOnInit(): void {
    this.getOrders();
  }

  public getOrders(): void {
    this._cartService.getOrders()
      .subscribe((orders: Product[]) => this.orders = orders);
  }

  public removeItemFromCart(order: Product): void {
    this._cartService.removeItem(order);
  }

}
